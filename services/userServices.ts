import User, { UserDocument } from '../models/userModel';

interface AddUserInput {
	name: string;
	email: string;
	password: string;
	phoneNumber: string;
	addresses: string[];
}

const createUser = async ({
	name,
	email,
	password,
	phoneNumber,
	addresses,
}: AddUserInput) => {
	try {
		const newUser = await User.create({
			name,
			email,
			password,
			phoneNumber,
			addresses,
		});

		return { success: true, user: newUser };
	} catch (error) {
		console.error(error);
		return { success: false, message: 'Internal server error' };
	}
};

export { createUser };
