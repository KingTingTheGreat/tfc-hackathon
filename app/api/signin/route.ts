import { NextRequest, NextResponse } from "next/server";
import { userDBConnect } from "@/utils/connection";
import bcrypt from "bcrypt";

export const dynamic = "force-dynamic"; // defaults to auto

export async function POST(request: NextRequest) {
	const { email, password } = await request.json();

	const hashedPassword = await bcrypt.hash(password, 10);

	const db = await userDBConnect();
	const user = await db.User.find({ email, password: hashedPassword }).exec();

	if (!user) {
		return NextResponse.json({ status: 401 });
	}
	if (user.length != 1) {
		return NextResponse.json({ status: 500 });
	}

	return NextResponse.json({ status: 200 });
}
