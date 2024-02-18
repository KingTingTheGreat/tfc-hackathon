import { TeamMember } from "@/types";

const team: TeamMember[] = [
	{
		name: "Jeffrey Ting",
		description:
			"I am a junior studying Computer Science and Philosophy. I am passionate about creating software to improve people's lives.",
		majors: ["Computer Science", "Philosophy"],
		year: "Junior",
		school: "Boston University",
	},
	{
		name: "Jeff Allo",
		description:
			"Jeff is a sophomore Electrical Engineering major. He loves playing video games and taking walks",
		majors: ["Electrical Engineering"],
		year: "Sophomore",
		school: "Howard University",
	},
	{
		name: "Rida Naeem",
		description:
			"Rida is a senior studying Computer Science and Business. She enjoys playing basketball and video games.",
		majors: ["Neuroscience", "Computer Science"],
		year: "Senior",
		school: "Boston University",
	},
	{
		name: "Nathaniel Crosse",
		description:
			"Nathaniel is a freshman studying Electrical Engineering. He enjoys running and playing the cello. ",
		majors: ["Electrical Engineering"],
		year: "Freshman",
		school: "Howard University",
	},
	{
		name: "Chinaza Okereke",
		description:
			"Chinaza is a sophomore studying Computer Engineering. He enjoys playing basketball and video games.",
		majors: ["Computer Engineering"],
		year: "Sophomore",
		school: "Howard University",
	},
];

const MemberCard = ({ member }: { member: TeamMember }) => {
	return (
		<div className="bg-blue-200 p-2 m-2 flex-1 rounded-lg min-w-72 max-w-72">
			<h3 className="text-2xl font-semibold">{member.name}</h3>
			<p className="text-xl">
				{member.year} | {member.school}
			</p>
			<p className="text-lg">{member.majors.join(", ")}</p>
			<p>{member.description}</p>
		</div>
	);
};

export default function About() {
	return (
		<main className="flex min-h-11/12 w-[80%]">
			<div className="flex flex-col items-center">
				<p className="text-2xl text-center text-offwhite p-4 md:p-20">
					We are a group of engineers and developers who are passionate about making healthcare data more
					accessible and transparent, ensuring useres always get the best prices for the medications,
					procedures, and treatments.
				</p>
				<div className="flex flex-wrap justify-center w-[80%]">
					{team.map((member) => (
						<MemberCard key={member.name} member={member} />
					))}
				</div>
			</div>
		</main>
	);
}
