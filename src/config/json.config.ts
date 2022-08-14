import { sign, verify } from 'jsonwebtoken';
import User from '../models/user.model';
var jwt = require('jsonwebtoken');



interface TokenData{
    token : string,
    expiresIn: number
}

interface DataStoredInToken{
    _id: string
}

interface UserData{
    name: string,
    email: string,
    shares: number,
    status: string,

}


const secret: string  = process.env.JWT_SECRET;



const createToken = (user:UserData):TokenData=>{
    const expiresIn = 60*60;
    const dataStoredInToken: DataStoredInToken = {
        _id:user.email,
    }
    return {
        expiresIn,
        token: jwt.sign(dataStoredInToken, secret , {expiresIn})
    };
}

const verifyToken = (token:string):boolean =>{
    jwt.verify(token, secret, (error:string, decoded:any)=>{
        let data = null;
        if(error){
            console.log('Error fetching data');
        }else{
            data = decoded;
        }
    })
    return false
}

export {createToken, verifyToken}