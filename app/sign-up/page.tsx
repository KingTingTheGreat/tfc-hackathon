"use client";
import { useState } from "react";
import Link from "next/link";

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
		<div className="flex items-center text-offwhite">
			<h4>{label}</h4>
			<input
				type="text"
				className="m-2 text-black rounded"
				value={value}
				placeholder={label}
				required={required}
				onChange={(e) => setValue(e.target.value)}
			/>
		</div>
	);
};

export default function SignUp1() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [middleName, setMiddleName] = useState("");

	return (
		<main className="flex min-h-11/12 items-center justify-center">
			<div className="flex-flex-col min-h-11/12 items-center justify-center text-center w-[70%] py-10 my-5">
				<p className="text-2xl text-offwhite ">
					Let&apos;s start with some basic information about you. Enter this information as it would appear on
					your medical documents.
				</p>
				<p className="text-sm py-5 text-offwhite">* marks a required field</p>
				<div className="flex-flex-col min-h-1 items-end my-5">
					<InputField label="First Name *" value={firstName} setValue={setFirstName} required={true} />
					<InputField label="Last Name *" value={lastName} setValue={setLastName} required={true} />
					<InputField label="Middle Name" value={middleName} setValue={setMiddleName} required={false} />
				</div>
				<div className="my-10">
					<Link
						className="text-blaj bg-offwhite text-center py-2 px-4 my-5 rounded-full"
						href="sign-up/date-of-birth">
						Continue
					</Link>
				</div>
				<div>
					<Link className="text-offwhite my-5" href="/sign-up">
						← Back
					</Link>
				</div>
			</div>
		</main>
	);
}
