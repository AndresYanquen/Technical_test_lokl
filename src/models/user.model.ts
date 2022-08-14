import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true},
    email: { type: String, required: true, unique: true },
    shares: { type: String, required: true},
    status:{ type: String, required: true, default: 'UNVERIFIED'},
})
const User = mongoose.model('User', UserSchema);
export default User;