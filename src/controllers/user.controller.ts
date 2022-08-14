import { Request, Response } from "express";
const { v4: uuidv4 } = require('uuid');
const User = require('../models/user.model')

const signUp = async (req: any, res: any) =>{
    try {
        const {name, email, shares} = req.body;
        let user:any = await User.findOne({email}) || null;
        if(user !== null){
            return res.json({
                success: false,
                msg: 'User already exists'
            })
        }
        const code = uuidv4();

        user = new User({name, email, code})

    } catch (error) {
        console.log(error);
        return res.json({
            success: false,
            msg: 'Error while registering user'
        })

    }
}