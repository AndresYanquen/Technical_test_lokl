import  express from "express";  //<>
import connectDB from "./config/db.config";
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 3000;
connectDB();

app.use(express.json());
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.get('/', (req: any, res:any) => {
    res.send("Hello world")
});

app.listen(PORT, () =>{
    console.log(`App is running on http://localhost:${PORT}`);    
});