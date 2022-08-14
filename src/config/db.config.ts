import mongoose from "mongoose";

const url:string = 'mongodb://127.0.0.1:27017/local';

const connectDB = async () =>{
    try{
        const connection =  await mongoose.connect(url)
        connection.STATES.connected ? console.log("MongoDb connected"):console.log("Error in MongoDB");;

    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

export default connectDB;