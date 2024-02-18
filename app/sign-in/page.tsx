"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function SignIn() {
	const router = useRouter();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [signedIn, setSignedIn] = useState(false);

	function signIn() {
		console.log("submitting signin info");

		fetch("/api/signin", {
			method: "POST",
			body: JSON.stringify({ email, password }),
		})
			.then((res) => {
				if (res.status !== 200) {
					console.error("Error signing in:", res.json());
					return "BAD RESPONSE";
				}
				return res.json();
			})
			.then((data) => {
				if (data === "BAD RESPONSE") return;
				setSignedIn(true);
				localStorage.setItem("userData", JSON.stringify(data));
			})
			.catch((error) => {
				console.error("Error signing in:", error);
			});
	}

	useEffect(() => {
		if (signedIn) {
			router.push("/dashboard");
		}
	});

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
