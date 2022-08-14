import { sign, verify } from 'jsonwebtoken';
import User from '../models/user.model';
import * as jwt from 'jsonwebtoken';



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






const createToken = (user:UserData):TokenData=>{
    const expiresIn = 60*60;
    const secret:any = process.env.JWT_SECRET;
    const dataStoredInToken: DataStoredInToken = {
        _id:user.email,
    }
    return {
        expiresIn,
        token: jwt.sign(dataStoredInToken, secret , {expiresIn})
    };
}

const verifyToken = (token:string):boolean =>{
    jwt.verify(token,process.env.JWT_SECRET )
    return false
}