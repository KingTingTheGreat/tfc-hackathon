export type TeamMember = {
	name: string;
	role: string;
	description: string;
	majors: string[];
	year: string;
	image: string;
};

export type User = {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
	streetAddress: string;
	city: string;
	state: string;
	zipCode: string;
	country: string;
	memberId: string;
	groupNumber: string;
	rxBin: string;
};
