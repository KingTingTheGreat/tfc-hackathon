"use client";
import { useState } from "react";
import { redirect } from "next/navigation";

const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];
const years: Number[] = [];
var i = 0;
for (i = 1900; i < 2025; i++) {
	years.push(i);
}

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

export default function SignUp() {
	const [section, setSection] = useState(0);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [middleName, setMiddleName] = useState("");
	const [selectedMonth, setSelectedMonth] = useState("");
	const [selectedDay, setSelectedDay] = useState("");
	const [selectedYear, setSelectedYear] = useState("");
	const handleDayChange = (event: any) => {
		setSelectedDay(event.target.value);
	};
	const handleMonthChange = (event: any) => {
		setSelectedMonth(event.target.value);
	};
	const handleYearChange = (event: any) => {
		setSelectedYear(event.target.value);
	};
	const [address, setAddress] = useState("");
	const [appt, setAppt] = useState("");
	const [city, setCity] = useState("");
	const [state, setSateName] = useState("");
	const [zipCode, setZipCode] = useState("");
	const [country, setCountry] = useState("");
	const [group, setGroup] = useState("");
	const [id, setID] = useState("");
	const [rxBIN, setRXBin] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [retypePassword, setRetypePassword] = useState("");

	const getMonthLength = () => {
		if (["January", "March", "May", "July", "August", "October", "December"].includes(selectedMonth)) {
			console.log(31);
			return 31;
		} else if (["April", "June", "September", "November"].includes(selectedMonth)) {
			console.log(30);
			return 30;
		} else if (Number(selectedYear) % 4 === 0) {
			console.log(29);
			return 29;
		} else {
			console.log(28);
			return 28;
		}
	};

	if (section < 0) {
		redirect("/");
	} else if (section > 5) {
		redirect("/dashboard");
	}

	return (
		<main className="flex min-h-11/12 items-center justify-center">
			<div className="flex-flex-col min-h-11/12 items-center justify-center text-center w-[70%] py-10 my-5">
				<div id="text-description">
					<p className="text-2xl text-offwhite ">
						Let&apos;s start with some basic information about you. Enter this information as it would
						appear on your medical documents.
					</p>
					<p className="text-sm py-5 text-offwhite">* marks a required field</p>
				</div>

				{/* section */}
				<div className={`${section === 0 ? "flex" : "hidden"} flex-col min-h-1 items-end my-5`}>
					<InputField label="First Name *" value={firstName} setValue={setFirstName} required={true} />
					<InputField label="Last Name *" value={lastName} setValue={setLastName} required={true} />
					<InputField label="Middle Name" value={middleName} setValue={setMiddleName} required={false} />
				</div>

				{/* section 2 */}
				<div className={`${section === 1 ? "flex" : "hidden"} flex-col min-h-1 items-end my-5`}>
					<label>Date of Birth:</label>
					<select className="text-black" name="day" id="day" value={selectedDay} onChange={handleDayChange}>
						{Array.from(
							{
								length: getMonthLength(),
							},
							(_, i) => i + 1
						).map((day) => (
							<option key={day} value={day}>
								{day}
							</option>
						))}
					</select>
					<select
						className="text-black"
						name="month"
						id="month"
						value={selectedMonth}
						onChange={handleMonthChange}>
						{months.map((month) => (
							<option key={month} value={month}>
								{month}
							</option>
						))}
					</select>
					<select
						className="text-black"
						name="year"
						id="year"
						value={selectedYear}
						onChange={handleYearChange}>
						{years.map((year) => (
							<option key={year.toString()} value={year.toString()}>
								{year.toString()}
							</option>
						))}
					</select>
				</div>

				{/* section 3 */}
				<div className={`${section === 2 ? "flex" : "hidden"} flex-col min-h-1 items-end my-5`}>
					<InputField label="Address *" value={address} setValue={setAddress} required={true} />
					<InputField label="Apartment, suite, etc" value={appt} setValue={setAppt} required={false} />
					<InputField label="City *" value={city} setValue={setCity} required={true} />
				</div>

				{/* section 4 */}
				<div className={`${section === 3 ? "flex" : "hidden"} flex-col min-h-1 items-end my-5`}>
					<InputField label="State *" value={state} setValue={setSateName} required={true} />
					<InputField label="Zip Code *" value={zipCode} setValue={setZipCode} required={true} />
					<InputField label="Country *" value={country} setValue={setCountry} required={true} />
				</div>

				{/* section 5 */}
				<div className={`${section === 4 ? "flex" : "hidden"} flex-col min-h-1 items-end my-5`}>
					<InputField label="Group Number *" value={group} setValue={setGroup} required={true} />
					<InputField label="Member ID *" value={id} setValue={setID} required={true} />
					<InputField label="RxBIN *" value={rxBIN} setValue={setRXBin} required={true} />
				</div>

				{/* section 6 */}
				<div className={`${section === 5 ? "flex" : "hidden"} flex-col min-h-1 items-end my-5`}>
					<InputField label="Email *" value={email} setValue={setEmail} required={true} />
					<InputField label="Password *" value={password} setValue={setPassword} required={true} />
					<InputField
						label="Retype Password *"
						value={retypePassword}
						setValue={setRetypePassword}
						required={true}
					/>
				</div>

				<div className="my-10">
					<div
						className="text-blaj bg-offwhite text-center py-2 px-4 my-5 rounded-full cursor-pointer select-none"
						onClick={() => {
							setSection(section + 1);
						}}>
						Continue
					</div>
				</div>
				<div>
					<div
						className="text-offwhite my-5 cursor-pointer select-none"
						onClick={() => {
							setSection(section - 1);
						}}>
						← Back
					</div>
				</div>
			</div>
		</main>
	);
}
