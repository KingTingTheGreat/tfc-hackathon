"use client";
import { useState, useEffect } from "react";

export default function SignUp() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [middleName, setMiddleName] = useState("");

	return (
		<main className="flex min-h-11/12 items-center justify-center">
			<div className="text-offwhite text-center w-[70%]">
				<p className="text-2xl">
					Let’s start with some basic information about you. Enter this information as it would appear on your
					medical documents.
				</p>
				<p className="text-sm">* marks a required field</p>
				<p>{lastName}</p>
				<p>{middleName}</p>
				<div className="flex items-center">
					<h4>First Name *</h4>
					<input
						type="text"
						className="m-2 text-black"
						value={firstName}
						placeholder="FirstName *"
						required={true}
						onChange={(e) => setFirstName(e.target.value)}
					/>
				</div>
			</div>
		</main>
	);
}
