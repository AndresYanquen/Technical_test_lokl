import mongoose from "mongoose";

export interface IUser {
    name: string;
    email: string;
    shares: number;
    status: boolean;
    code: string;
    date: Date;
}

const UserSchema = new mongoose.Schema<IUser>({
    name: { type: String, required: true},
    email: { type: String, required: true, unique: true },
    shares: { type: Number, required: true, min: 40, max: 2000 },
    status: { type: Boolean, required: false, default: false},
    code: { type: String, required: true, unique: true },
    date: {type: Date, required: true, default: () => new Date(Date.now())}
})


export const User = mongoose.model<IUser>('User', UserSchema);