import { Secret, sign, verify } from 'jsonwebtoken';
import { IUser } from '../models/user.model';
var jwt = require('jsonwebtoken');
interface TokenData{
    token : string,
    expiresIn: number
}
interface DataStoredInToken{
    email: string;
    code: string
}

const secret: string  = process.env.JWT_SECRET || "secret";

export const createToken = (user: IUser): TokenData => {
    const expiresIn = 60*60;
    const dataStoredInToken: DataStoredInToken = {
        email: user.email,
        code: user.code
    }
    return {
        expiresIn,
        token: jwt.sign(dataStoredInToken, secret , {expiresIn})
    };
}

export const verifyToken = (token: string): boolean => {
    return jwt.verify(token, secret, (error: string, decoded: any)=>{
        console.log(decoded);
        if(error){
            console.log('Error fetching data');
        }

        return decoded;
    })
    
};
