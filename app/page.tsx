import Link from "next/link";

export default function Home() {
	return (
		<main className="flex flex-col min-h-11/12 items-center">
			<h1>Welcome to the TFC Hackathon</h1>
			<div className="flex flex-col justify-around">
				<Link href="sign-up">Sign Up</Link>
				<Link href="sign-in">Sign In</Link>
			</div>
		</main>
	);
}
