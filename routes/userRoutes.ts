import express from 'express';
import {
	registerUser,
	login,
	forgotPassword,
	resetPassword,
	getSingleUser,
	getAllUsers,
	updateUser,
	deleteUser,
} from '../controllers/userController';
const router = express.Router();
import authenticateAdmin from '../middleware/authenticateAdmin';

router.post('/login', login);
router.post('/registerUser', registerUser);
router.post('/forgotPassword', forgotPassword);
router.post('/resetPassword/:token', resetPassword);
router.get('/getAllUsers', getAllUsers);
router.get('/getSingleUser/:id', getSingleUser);

router.put('/updateUser/:id', updateUser);
router.delete('/deleteUser/:id', deleteUser);

export default router;
