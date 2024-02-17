"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

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
				className="m-2 text-black rounded"
				value={value}
				placeholder={label}
				required={required}
				onChange={(e) => setValue(e.target.value)}
			/>
		</div>
	);
};

export default function SignUp5() {
	const [group, setGroup] = useState("");
	const [id, setID] = useState("");
	const [rxBIN, setRXBin] = useState("");

	return (
		<main className="flex min-h-11/12 items-center justify-center">
			<div className="text-offwhite text-center w-[70%]">
				<p className="text-2xl">
					Let&apos;s start with some basic information about you. Enter this information as it would appear on
					your medical documents.
				</p>
				<p className="text-sm">* marks a required field</p>
				<InputField label="Group Number *" value={group} setValue={setGroup} required={true} />
				<InputField label="Member ID *" value={id} setValue={setID} required={true} />
				<InputField label="RxBIN *" value={rxBIN} setValue={setRXBin} required={true} />
				<div>
					<Link
						className="text-blaj bg-offwhite text-center py-2 px-4 my-2 rounded-full"
						href="/sign-up/email-and-password">
						Continue
					</Link>
				</div>
				<div>
					<Link href="/">← Back</Link>
				</div>
			</div>
		</main>
	);
}
