import { NextRequest, NextResponse } from "next/server";
import { userDBConnect } from "@/utils/connection";
import { User } from "@/types";
const bcrypt = require("bcrypt");

export const dynamic = "force-dynamic"; // defaults to auto

export async function POST(request: NextRequest) {
	const user: User = await request.json();

	if (
		!user ||
		!user.email ||
		!user.password ||
		!user.firstName ||
		!user.lastName ||
		!user.streetAddress ||
		!user.city ||
		!user.state ||
		!user.zipCode ||
		!user.country ||
		!user.memberId ||
		!user.groupNumber ||
		!user.rxBin
	) {
		return NextResponse.json({ error: "Invalid input data" }, { status: 500 });
	}

	const db = await userDBConnect();

	// check if account with this email already exists
	const existing = await db.User.find({ email: user.email }).exec();
	if (existing.length > 0) {
		console.log("Trying to create a user that already exists");
		return NextResponse.json({ error: "This user already exists" }, { status: 500 });
	}

	// hash the password
	const hashedPassword = await bcrypt.hash(user.password, 10);
	user.password = hashedPassword;

	const userDB = new db.User(user);
	await userDB.save();

	return NextResponse.json("User created successfully", { status: 200 });
}
