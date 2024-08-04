import express from 'express';
import { authUser,registerUser,logOutUser,getUserProfile,updateUserProfile } from '../controllers/userController.js';

const router = express.Router();

router.post('/',registerUser)
router.get('/auth',authUser)
router.post('/logOut',logOutUser)
router.route('/profile').get(getUserProfile).put(updateUserProfile);

export default router;