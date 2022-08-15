import express from 'express';
const router = express.Router();
import {signUp, confirm} from '../controllers/user.controller';



router.post('/signup', signUp);
router.get('/confirm/:token', confirm)

export default router;

