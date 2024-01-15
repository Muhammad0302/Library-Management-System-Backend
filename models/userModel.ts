import mongoose, { Model, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

interface Address {
	addressLine1: string;
	addressLine2: string;
	city: string;
	state: string;
	country: string;
}

interface UserDocument {
	name: string;
	email: string;
	password: string;
	phoneNumber: string;
	addresses: Address[];
	comparePassword(candidatePassword: string): Promise<boolean>;
	generateToken(): string;
}

const addressSchema = new Schema<Address>({
	addressLine1: { type: String, required: true },
	addressLine2: { type: String },
	city: { type: String, required: true },
	state: { type: String, required: true },
	country: { type: String, required: true },
});

const userSchema = new Schema<UserDocument>({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	phoneNumber: {
		type: String,
		required: true,
	},

	addresses: [addressSchema],
});

// Hash the password before saving to the database
userSchema.pre<UserDocument>('save', async function (next) {
	try {
		const salt = await bcrypt.genSalt(10);
		this.password = await bcrypt.hash(this.password, salt);
		next();
	} catch (error: any) {
		next(error);
	}
});

// Method to compare passwords
userSchema.methods.comparePassword = async function (
	candidatePassword: string
) {
	try {
		return await bcrypt.compare(candidatePassword, this.password);
	} catch (error: any) {
		return false;
	}
};

const User: Model<UserDocument> = mongoose.model('User', userSchema);

export { UserDocument };
export default User;
