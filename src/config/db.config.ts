import mongoose from "mongoose";

const url:string = process.env.MONGO_CONNECTION_PORT || 'mongodb://127.0.0.1:27017';

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