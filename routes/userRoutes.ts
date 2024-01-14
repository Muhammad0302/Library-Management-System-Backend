import express from 'express';
import {
	adminRegister,
	addUser,
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
router.post('/forgotPassword', forgotPassword);
router.post('/resetPassword/:token', resetPassword);

router.post('/adminRegister', adminRegister);

// router.use(authenticateAdmin);
router.post('/addUser', addUser);
router.get('/getAllUsers', isAdmin, getAllUsers);
router.get('/getSingleUser/:id', isAdmin, getSingleUser);

router.put('/updateUser/:id', isAdmin, updateUser);
router.delete('/deleteUser/:id', isAdmin, deleteUser);

export default router;
