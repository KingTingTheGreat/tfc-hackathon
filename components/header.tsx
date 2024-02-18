import Link from "next/link";

const NavLink = ({ path, name }: { path: string; name: string }) => {
	return (
		<Link className="p-2.5 m-2 rounded-lg hover:bg-blue-300 transition" href={path}>
			{name}
		</Link>
	);
};

const Header = () => {
	return (
		<header className="hidden md:flex justify-between items-center w-full min-h-1/12 p-4 bg-offwhite">
			<Link href="/">
				<h2 className="text-2xl font-bold">TFC HACKATHON</h2>
			</Link>
			<nav>
				<NavLink path="/" name="Home" />
				<NavLink path="/about" name="About" />
				<NavLink path="/dashboard" name="Dashboard" />
			</nav>
		</header>
	);
};

export default Header;
