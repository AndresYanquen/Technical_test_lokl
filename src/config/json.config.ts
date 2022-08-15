import { Secret, sign, verify } from 'jsonwebtoken';
import { IUser } from '../models/user.model';
export const jwt = require('jsonwebtoken');
interface TokenData{
    token : string,
    expiresIn: number
}
export interface DataStoredInToken{
    email: string;
    code: string
}

export const secret: string  = process.env.JWT_SECRET || "secret";

export const createToken = (user: IUser): TokenData => {
    const expiresIn = 60*600;
    const dataStoredInToken: DataStoredInToken = {
        email: user.email,
        code: user.code
    }
    return {
        expiresIn,
        token: jwt.sign(dataStoredInToken, secret , {expiresIn})
    };
}

export const verifyToken = (token: string): DataStoredInToken => {
    return jwt.verify(token, secret, (error: string, decoded: DataStoredInToken)=>{
        if(error){
            console.log('Error fetching data');
        }
        return decoded;
    })
    
};

