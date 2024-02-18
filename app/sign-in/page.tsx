"use client";
import { useState } from "react";
import { redirect } from "next/navigation";
import useSWR, { mutate } from "swr";

export default function SignIn() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [signedIn, setSignedIn] = useState(false);

	const { data, error } = useSWR(signedIn ? "/api/userData" : null);

	if (signedIn) {
		redirect("/dashboard");
	}

	function signIn() {
		console.log("submitting signin info");

		fetch("/api/signin", {
			method: "POST",
			body: JSON.stringify({ email, password }),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setSignedIn(true);
				console.log(data._doc);
				localStorage.setItem("userData", JSON.stringify(data._doc));
				mutate("/api/userData", data, false);
				redirect("/dashboard");
			})
			.catch((error) => {
				console.error("Error signing in:", error);
			});
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

			<button onClick={signIn}>Sign In</button>
		</main>
	);
}
