import { TeamMember } from "@/types";

const team: TeamMember[] = [
	{
		name: "Jeffrey Ting",
		role: "President",
		description:
			"Jeffrey is a senior studying Computer Science and Business. He enjoys playing basketball and video games.",
		majors: ["Computer Science", "Business"],
		year: "Senior",
		image: "jeffrey.jpg",
	},
	{
		name: "Jeff Allo",
		role: "Vice President",
		description:
			"Jeff is a senior studying Computer Science and Business. He enjoys playing basketball and video games.",
		majors: ["Computer Science", "Business"],
		year: "Senior",
		image: "jeff.jpg",
	},
	{
		name: "Rida Naeem",
		role: "Secretary",
		description:
			"Rida is a senior studying Computer Science and Business. She enjoys playing basketball and video games.",
		majors: ["Computer Science", "Business"],
		year: "Senior",
		image: "rida.jpg",
	},
];

const MemberCard = ({ member }: { member: TeamMember }) => {
	return (
		<div className="bg-green-200 p-2 m-2 flex-1 rounded-lg max-w-40">
			<h3>Name: {member.name}</h3>
			<p>{member.role}</p>
			<p>{member.description}</p>
		</div>
	);
};

export default function About() {
	return (
		<main className="flex min-h-screen items-center  p-24">
			{team.map((member) => (
				<MemberCard key={member.name} member={member} />
			))}
		</main>
	);
}
