import Link from "next/link";

const NavLink = ({ path, name }: { path: string; name: string }) => {
	return (
		<Link className="p-2 m-2 bg-blue-300 hover:bg-green-200" href={path}>
			{name}
		</Link>
	);
};

const Header = () => {
	return (
		<header className="flex justify-between w-full min-h-1/12 p-4 bg-gray-200">
			<div>TFC HACKATHON</div>
			<div>
				<NavLink path="/" name="Home" />
				<NavLink path="/about" name="About" />
				<NavLink path="/contact" name="Contact" />
			</div>
		</header>
	);
};

export default Header;
