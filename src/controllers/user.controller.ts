import { Request, Response } from "express";
import { createToken, verifyToken } from "../config/json.config";
const { v4: uuidv4 } = require('uuid');
const User = require('../models/user.model')
const main = require('../config/mail.config')

const signUp = async (req: Request, res: Response) =>{
    try {
        const {name, email, shares} = req.body;
        let user:User = await User.findOne({email}) || null;
        if(user !== null){
            return res.json({
                success: false,
                msg: 'User already exists'
            })
        }
        const code = uuidv4();

        user = new User({name, email, code});

        const token = createToken(user);

        const template = main.setTemplate(user.name, user.email)

        main.sendEmail(user.email, 'Test Email', template)
        await user.save();
        res.json({
            success: true,
            msg: 'User registered correctly'
        })

    } catch (error) {
        console.log(error);
        return res.json({
            success: false,
            msg: 'Error while registering user'
        })

    }
}

export default signUp;

