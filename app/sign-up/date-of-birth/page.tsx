"use client";
import Link from "next/link";
import { useState } from "react";

const days = {
	January: 31,
	February: 28,
	March: 31,
	April: 30,
	May: 31,
	June: 30,
	July: 31,
	August: 31,
	September: 30,
	October: 31,
	November: 30,
	December: 31,
};

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
for (i = 1990; i < 2025; i++) {
	years.push(i);
}

export default function SignUp2() {
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

	return (
		<main className="flex min-h-11/12 items-center justify-center">
			<div className="text-offwhite text-center w-[70%]">
				<p className="text-2xl">
					Let&apos;s start with some basic information about you. Enter this information as it would appear on
					your medical documents.
				</p>
				<p className="text-sm">* marks a required field</p>
				<label>Date of Birth:</label>
				<select className="text-black" name="day" id="day" value={selectedDay} onChange={handleDayChange}>
					{Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
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
				<select className="text-black" name="year" id="year" value={selectedYear} onChange={handleYearChange}>
					{years.map((year) => (
						<option key={year.toString()} value={year.toString()}>
							{year.toString()}
						</option>
					))}
				</select>
				<div>
					<Link
						className="text-blaj bg-offwhite text-center py-2 px-4 my-2 rounded-full"
						href="/sign-up/address-one">
						Continue
					</Link>
				</div>
				<div>
					<Link href="/sign-up">← Back</Link>
				</div>
			</div>
		</main>
	);
}
