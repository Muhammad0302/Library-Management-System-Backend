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
import isAdmin from '../middleware/role';
import authenticateAdmin from '../middleware/authenticateAdmin';

router.post('/login', login);
router.post('/registerUser', registerUser);
router.post('/forgotPassword', forgotPassword);
router.post('/resetPassword/:token', resetPassword);
router.get('/getAllUsers', isAdmin, getAllUsers);
router.get('/getSingleUser/:id', isAdmin, getSingleUser);

router.put('/updateUser/:id', isAdmin, updateUser);
router.delete('/deleteUser/:id', isAdmin, deleteUser);

export default router;
