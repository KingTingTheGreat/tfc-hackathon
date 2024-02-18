import Link from "next/link";

const NavLink = ({ path, name }: { path: string; name: string }) => {
	return (
		<Link
			className="text-blaj p-4 border-solid border-2 border-offwhite hover:border-gray-300 hover:shadow-xl transition-all"
			href={path}>
			{name}
		</Link>
	);
};

const Header = () => {
	return (
		<header className="hidden md:flex justify-between items-center w-full min-h-1/12 p-4 bg-offwhite">
			<Link href="/">
				<h2 className="text-4xl text-blaj font-bold">ExploRx</h2>
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
