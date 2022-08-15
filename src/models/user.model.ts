import mongoose from "mongoose";

export interface IUser {
    name: string;
    email: string;
    shares: number;
    status: boolean;
    code: string;
}

const UserSchema = new mongoose.Schema<IUser>({
    name: { type: String, required: true},
    email: { type: String, required: true, unique: true },
    shares: { type: Number, required: true},
    status: { type: Boolean, required: false, default: false},
    code: { type: String, required: true, unique: true },
})


export const User = mongoose.model<IUser>('User', UserSchema);