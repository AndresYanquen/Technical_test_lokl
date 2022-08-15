import express from 'express';
const router = express.Router();
import {signUp, confirm, verifyUser, getUsersInformation} from '../controllers/user.controller';



router.post('/signup', signUp);
router.get('/confirm/:token', confirm)
router.post('/getUsers', verifyUser, getUsersInformation)

export default router;

