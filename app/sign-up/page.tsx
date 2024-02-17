"use client";
import { useState } from "react";

const InputField = ({
	label,
	value,
	setValue,
	required,
}: {
	label: string;
	value: string;
	setValue: any;
	required: boolean;
}) => {
	return (
		<div className="flex items-center">
			<h4>{label}</h4>
			<input
				type="text"
				className="m-2 text-black"
				value={value}
				placeholder={label}
				required={required}
				onChange={(e) => setValue(e.target.value)}
			/>
		</div>
	);
};

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
				<InputField label="First Name *" value={firstName} setValue={setFirstName} required={true} />
				<InputField label="Last Name *" value={lastName} setValue={setLastName} required={true} />
				<InputField label="Middle Name" value={middleName} setValue={setMiddleName} required={false} />
			</div>
		</main>
	);
}
