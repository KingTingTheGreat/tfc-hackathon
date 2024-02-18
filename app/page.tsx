"use client";
import Link from "next/link";

const ButtonLink = ({ path, text }: { path: string; text: string }) => {
	return (
		<Link
			className="text-blue text-3xl bg-white text-center py-2 px-4 my-2 rounded-full hover:text-blaj"
			href={path}>
			{text}
		</Link>
	);
};

export default function Home() {
	// localStorage.setItem("userData", JSON.stringify({}));

	return (
		<main className="flex flex-col min-h-11/12 items-center">
			<h1 className="text-[20vw] md:text-[15vh] text-white text-4xl font-bold pt-[10vh] md:pt-[20vh] m-4">
				Explo<span className="text-black">Rx</span>
			</h1>
			<div className="text-center p-[5rem] text-white text-3xl">
				Your one stop shop for finding and comparing prescription and medical procedure pricing information
			</div>
			<div className="flex flex-col justify-around">
				<ButtonLink path="sign-up" text="Sign Up" />
				<ButtonLink path="sign-in" text="Sign In" />
			</div>
		</main>
	);
}
