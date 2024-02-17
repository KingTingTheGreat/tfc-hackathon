"use client";
import { useState } from "react";

export default function SignIn() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [signedIn, setSignedIn] = useState(false);

	if (signedIn) {
		return <p>Success</p>;
	}

	return (
		<main className="flex min-h-11/12 items-center">
			<p>Sign In</p>

			<div className="flex items-center">
				<h4>Email</h4>
				<input
					type="text"
					className="m-2 text-black"
					value={email}
					placeholder="Email"
					required={true}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<div className="flex items-center">
				<h4>Password</h4>
				<input
					type="password"
					className="m-2 text-black"
					value={password}
					placeholder="Password"
					required={true}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>

			<button
				onClick={() => {
					console.log("submitting signin info");
					fetch("/api/signin", {
						method: "POST",
						body: JSON.stringify({ email, password }),
					}).then((res) => {
						if (res.ok) {
							setSignedIn(true);
						}
					});
				}}>
				Sign In
			</button>
		</main>
	);
}
