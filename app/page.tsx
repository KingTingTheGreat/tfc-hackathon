import Link from "next/link";

const ButtonLink = ({ path, text }: { path: string; text: string }) => {
	return (
		<Link className="text-blue bg-offwhite text-center py-2 px-4 my-2 rounded-full" href={path}>
			{text}
		</Link>
	);
};

export default function Home() {
	return (
		<main className="flex flex-col min-h-11/12 items-center">
			<h1>Welcome to the TFC Hackathon</h1>
			<div className="flex flex-col justify-around">
				<ButtonLink path="sign-up" text="Sign Up" />
				<ButtonLink path="sign-in" text="Sign In" />
			</div>
		</main>
	);
}
