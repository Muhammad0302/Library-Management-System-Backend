import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
interface userInput {
	email: string;
}
const generateToken = ({ email }: userInput) => {
	const secretKey = 'yourSecretKey';

	const token = jwt.sign(
		{
			email: email,
		},
		secretKey,
		{ expiresIn: '12h' } // Set the token expiration time as needed
	);

	return token;
};
export default generateToken;
