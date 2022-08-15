import { NextFunction, Request, Response } from "express";
import { createToken, verifyToken } from "../config/json.config";
import { MailService } from "../config/mail.config";
import  {User}  from "../models/user.model";
import {DataStoredInToken} from '../config/json.config';
import { decode, JsonWebTokenError } from "jsonwebtoken";
import {secret} from '../config/json.config';
import {jwt} from '../config/json.config';
const { v4: uuidv4 } = require('uuid');



const signUp = async (req: Request, res: Response) =>{
    try {
        const {name, email, shares} = req.body;
        const alreadyExisitingUser = await User.findOne({email});
        if (alreadyExisitingUser) {
            return res.json({
                success: false,
                msg: 'User already exists'
            })
        }
        const code = uuidv4();

        const user = new User({name, email, shares, code});

        const {token} = createToken(user);
        

        const template = MailService.setTemplate(user.name, token);

        MailService.sendEmail(user.email, 'Test Email', template);
        await user.save();
        res.json({
            success: true,
            msg: 'User registered properly'
        })

    } catch (error) {
        console.log(error);
        return res.json({
            success: false,
            msg: `Error while registering user -> ${error}`
        })

    }

    
}

const confirm = async (req: Request, res: Response) => {
    try {
        const {token} = req.params;
        const data: DataStoredInToken  = await verifyToken(token);
        
        if(data === null){
            return res.json({
                success: false,
                msg: 'Error getting data'
            })
        }

        const {email, code} = data;
        
        const user = await User.findOne({email});
        if (user ===null) {
            return res.json({
                success: false,
                msg: 'User does not exist'
            })
        }

        if(code != user.code){
            return res.send({
                success: false,
                msg: 'Code does not match'
            })
        }

        user.status = true;
        user.save();

        const notificationEmail = await MailService.notificationEmail(user.name, user.email);

        MailService.sendEmail('andres.yanquen@uptc.edu.co', 'Confirmation  Email', notificationEmail);


        return res.send({
            suceess:true,
            msg: 'User verified succesfully'
        })

    } catch (error) {
        console.log(error);
        return res.json({
          success: false,
          msg: `Error confirming user -> ${error}`
        }); 
    }
  }

  const verifyUser = async (req: Request, res: Response, next: NextFunction) =>{
      let token:string | undefined = req.header('Authorization');
      if(!token){
          res.status(401).send({
            error: 'Token is required to authentication'
        })
      }

      if(token?.startsWith('Bearer ')){
        token = token.replace('Bearer ', '');
      }

      if(token){
        jwt.verify(token, secret, (error:string, decoded:DataStoredInToken)=>{
            if(error){
                return res.json({
                    message: `Token is not valid -> ${error}`
                })
            }else{
                next()
            }
        })
      }



  }

  const getUsersInformation = async (req: Request, res: Response) =>{
    const verified_users:string[] = await User.find({status: true, date: {$gte:new Date(req.body.from) , $lte:new Date(req.body.until)} });
    res.send(verified_users)
  }



export {signUp, confirm, verifyUser, getUsersInformation};

