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
		<div className="flex flex-col min-h-11/12 md:flex-row items-center text-offwhite">
			<div className="flex flex-col md:flex-row items-start md:items-center">
				<h4>{label}</h4>
				<input
					type="text"
					className="m-0.5 md:m-2 p-1 text-black rounded"
					value={value}
					placeholder={label}
					required={required}
					onChange={(e) => setValue(e.target.value)}
				/>
			</div>
		</div>
	);
};

export default function SignUp() {
	const [section, setSection] = useState(0);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [middleName, setMiddleName] = useState("");
	const [selectedMonth, setSelectedMonth] = useState("January");
	const [selectedDay, setSelectedDay] = useState("1");
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
	const [streetAddress, setStreetAddress] = useState("");
	const [appt, setAppt] = useState("");
	const [city, setCity] = useState("");
	const [state, setSateName] = useState("");
	const [zipCode, setZipCode] = useState("");
	const [country, setCountry] = useState("");
	const [groupNumber, setGroupNumber] = useState("");
	const [memberId, setMemberId] = useState("");
	const [rxBin, setrxBin] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [retypePassword, setRetypePassword] = useState("");

	const [redirectSignin, setRedirectSignin] = useState(false);

	const [errorMessage, setErrorMessage] = useState(<p></p>);

	const getMonthLength = () => {
		if (["January", "March", "May", "July", "August", "October", "December"].includes(selectedMonth)) {
			return 31;
		} else if (["April", "June", "September", "November"].includes(selectedMonth)) {
			return 30;
		} else if (Number(selectedYear) % 4 === 0) {
			return 29;
		} else {
			return 28;
		}
	};

	if (section < 0) {
		redirect("/");
	} else if (section > 5) {
		fetch("/api/signup", {
			method: "POST",
			body: JSON.stringify({
				firstName,
				lastName,
				middleName,
				streetAddress,
				appt,
				city,
				state,
				zipCode,
				country,
				groupNumber,
				memberId,
				rxBin,
				email,
				password,
				dob: `${selectedMonth} ${selectedDay}, ${selectedYear}`,
			}),
		}).then((res) => {
			if (res.ok) {
				setRedirectSignin(true);
			} else {
				setSection(section - 1);
				setErrorMessage(<p className="text-sm text-red-600">An error occurred. Please try again.</p>);
			}
		});
	}

	if (redirectSignin) {
		redirect("/sign-in");
	}

	return (
		<main className="flex min-h-11/12 items-center justify-center">
			<div className="flex-flex-col min-h-11/12 items-center justify-center text-center py-10 my-5">
				<div id="text-description w-[70%]">
					<p className="text-2xl text-offwhite ">
						Let&apos;s start with some basic information about you. Enter this information as it would
						appear on your medical documents.
					</p>
					<p className="text-sm py-5 text-offwhite">* marks a required field</p>
				</div>
				<div className="flex flex-col w-full items-center">
					<div className="h-40 w-[80%] flex justify-center">
						{/* section 1 */}
						<div className={`${section === 0 ? "flex" : "hidden"} flex-col items-end my-5`}>
							<InputField label="First Name*" value={firstName} setValue={setFirstName} required={true} />
							<InputField label="Last Name*" value={lastName} setValue={setLastName} required={true} />
							<InputField
								label="Middle Name"
								value={middleName}
								setValue={setMiddleName}
								required={false}
							/>
						</div>

						{/* section 2 */}
						<div className={`${section === 1 ? "flex" : "hidden"} flex-col items-end my-5`}>
							<label className="text-offwhite">Date of Birth*</label>
							<select
								className="text-black m-2"
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
								className="text-black m-2"
								name="day"
								id="day"
								value={selectedDay}
								onChange={handleDayChange}>
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
								className="text-black m-2"
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
						<div className={`${section === 2 ? "flex" : "hidden"} flex-col items-end my-5`}>
							<InputField
								label="Street Address*"
								value={streetAddress}
								setValue={setStreetAddress}
								required={true}
							/>
							<InputField
								label="Apartment, suite, etc"
								value={appt}
								setValue={setAppt}
								required={false}
							/>
							<InputField label="City*" value={city} setValue={setCity} required={true} />
						</div>

						{/* section 4 */}
						<div className={`${section === 3 ? "flex" : "hidden"} flex-col items-end my-5`}>
							<InputField label="State*" value={state} setValue={setSateName} required={true} />
							<InputField label="Zip Code*" value={zipCode} setValue={setZipCode} required={true} />
							<InputField label="Country*" value={country} setValue={setCountry} required={true} />
						</div>

						{/* section 5 */}
						<div className={`${section === 4 ? "flex" : "hidden"} flex-col items-end my-5`}>
							<InputField
								label="Group Number*"
								value={groupNumber}
								setValue={setGroupNumber}
								required={true}
							/>
							<InputField label="Member ID*" value={memberId} setValue={setMemberId} required={true} />
							<InputField label="rxBin*" value={rxBin} setValue={setrxBin} required={true} />
						</div>

						{/* section 6 */}
						<div className={`${section === 5 ? "flex" : "hidden"} flex-col items-end my-5`}>
							<InputField label="Email *" value={email} setValue={setEmail} required={true} />
							<InputField label="Password *" value={password} setValue={setPassword} required={true} />
							<InputField
								label="Retype Password *"
								value={retypePassword}
								setValue={setRetypePassword}
								required={true}
							/>
						</div>
					</div>

					<div className="my-10 w-full flex flex-col items-center">
						<div className="md:flex md:flex-row-reverse md:items-center">
							<div
								className="text-blaj bg-offwhite flex justify-center w-20 py-2 px-4 my-5 rounded-full hover:shadow-xl transition-all cursor-pointer select-none"
								onClick={() => {
									setSection(section + 1);
								}}>
								Continue
							</div>
							<div
								className="text-offwhite flex justify-center fixed left-0 bottom-0 md:static w-20 m-4 p-2 rounded-full cursor-pointer select-none"
								onClick={() => {
									setSection(section - 1);
								}}>
								← Back
							</div>
						</div>

						{errorMessage}
					</div>
				</div>
			</div>
		</main>
	);
}
