import express, { Express } from 'express';  //<>
import connectDB from "./config/db.config";
require('dotenv').config()
import routes from './routes/user.routes';

const router: Express = express();

const PORT = process.env.PORT || 3000;
connectDB();


router.use(express.json());
router.use(express.urlencoded({extended: false}));
router.use('/api/users', routes);
/* router.get('/', (req: any, res:any) => {
    res.send("Hello world")
}); */

router.listen(PORT, () =>{
    console.log(`App is running on http://localhost:${PORT}`);    
});

