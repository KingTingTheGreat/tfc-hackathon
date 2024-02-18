"use client";
import { User } from "@/types";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function Prescription() {
	const [userData, setUserData] = useState<User | null>(null);

	useEffect(() => {
		// Retrieve user data from localStorage
		const storedUserData = localStorage.getItem("userData");
		if (storedUserData !== "{}" && storedUserData !== null) {
			setUserData(JSON.parse(storedUserData.toString()));
		} else {
			// Redirect the user back to the home page
			redirect("/");
		}
	}, []);
	const [searchValue, setSearchValue] = useState("");
	if (!userData) {
		return <div>loading...</div>;
	}

	return (
		<main className="w-full min-h-11/12 flex flex-col text-offwhite items-center justify-center">
			<div className="text-center">
				<h2 className="text-5xl p-2 m-1">Prescriptions</h2>
			</div>
			<div className="flex flex-col items-center justify-center">
				<div>
					<p>New search</p>
					<input
						type="text"
						className="m-2 text-black border-2 border-solid border-blue-500"
						value={searchValue}
						placeholder="Ex: Antorvastatin"
						required={true}
						onChange={(e) => setSearchValue(e.target.value)}
					/>
				</div>
				<div
					style={{
						width: "300px",
						height: "100px",
						background: "linear-gradient(to right, blue, lightblue)",
						borderRadius: "10px",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						color: "white",
						fontSize: "24px",
						fontWeight: "bold",
					}}></div>
			</div>
		</main>
	);
}
