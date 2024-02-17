//IMPORT MONGOOSE
import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;
const DB_NAME = process.env.DB_NAME;
const DB_COLLECTION = process.env.DB_COLLECTION;

// connection function
export const userDBConnect = async () => {
	const UserSchema = new mongoose.Schema({
		email: String,
		password: String,
		firstName: String,
		lastName: String,
		middleName: String,
		streetAddress: String,
		aptSuite: String,
		city: String,
		state: String,
		zipCode: String,
		country: String,
		memberId: String,
		groupNumber: String,
		rxBin: String,
	});

	const conn = await mongoose.connect(MONGODB_URL as string).catch((err) => console.log(err));

	if (!conn) {
		console.log("Connection Error");
		throw new Error("Connection Error");
	}

	const User = mongoose.models.User || mongoose.model("User", UserSchema, DB_COLLECTION);

	return { conn, User };
};
