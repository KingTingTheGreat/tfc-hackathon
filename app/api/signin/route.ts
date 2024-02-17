import { NextRequest, NextResponse } from "next/server";
import { userDBConnect } from "@/utils/connection";
const bcrypt = require("bcrypt");

export const dynamic = "force-dynamic"; // defaults to auto

export async function POST(request: NextRequest) {
	const { email, password } = await request.json();

	if (!email || !password) {
		return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
	}

	const db = await userDBConnect();
	const user = await db.User.find({ email }).exec();

	// check this user exists
	if (user.length === 0) {
		return NextResponse.json({ error: "Incorrect email" }, { status: 401 });
	}
	// ensure nothing wrong on our end
	if (user.length > 1) {
		return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
	}

	// check if the password is correct
	const match = await bcrypt.compare(password, user[0].password);
	if (!match) {
		return NextResponse.json({ error: "Incorrect password" }, { status: 401 });
	}
	// return user data
	const { password: _, ...userData } = user[0];
	return NextResponse.json(userData, { status: 200 });
}
