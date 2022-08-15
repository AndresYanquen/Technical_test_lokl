import { Request, Response } from "express";
import { createToken, verifyToken } from "../config/json.config";
import { MailService } from "../config/mail.config";
import  {User}  from "../models/user.model";
import {DataStoredInToken} from '../config/json.config';
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

export {signUp, confirm};

