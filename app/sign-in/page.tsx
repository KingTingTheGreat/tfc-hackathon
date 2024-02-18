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
					console.error("Error signing in:", res.status);
					console.log(res.json());
					return "BAD RESPONSE";
				}
				return res.json();
			})
			.then((data) => {
				if (data !== "BAD RESPONSE") {
					setSignedIn(true);
					localStorage.setItem("userData", JSON.stringify(data));
				}
			})
			.catch((error) => {
				console.error("Error signing in:", error);
			});
	}

	useEffect(() => {
		if (signedIn) {
			router.push("/dashboard");
		} else {
			localStorage.setItem("userData", JSON.stringify({}));
		}
	});

	return (
		<main className="flex flex-col text-offwhite min-h-11/12 items-center">
			<p className="text-2xl">Sign In</p>

			<div className="flex flex-col items-center">
				<h4 className="text-lg">Email</h4>
				<input
					type="text"
					className="m-1 text-black p-1"
					value={email}
					placeholder="Email"
					required={true}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<h4 className="text-lg">Password</h4>
				<input
					type="password"
					className="m-1 text-black p-1"
					value={password}
					placeholder="Password"
					required={true}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>

			<button
				className="text-blaj bg-offwhite flex justify-center w-20 py-2 px-4 my-5 rounded-full hover:shadow-xl transition-all cursor-pointer select-none"
				onClick={signIn}>
				Sign In
			</button>
		</main>
	);
}
