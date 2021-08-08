import emoji from "react-easy-emoji";

import googlelogo from "./assets/img/icons/common/google.svg";
import github from "./assets/img/icons/common/github.svg";
import airbnb from "./assets/img/icons/common/airbnbLogo.png";
import iwell  from "./assets/img/iwell2.jpg"
import career from "./assets/img/careers30.jpeg"
import pie from "./assets/img/pie.png"
export const greetings = {
	name: "Yogesh Sharma",
	title: "Hi all, I'm Yogesh",
	description:
		"I'm  a passionate React Developer having an experience of building Web applications with JavaScript / Reactjs / Nodejs  and some other cool libraries and frameworks.",
	resumeLink: "https://cv.yogesh.sh",
};

export const openSource = {
	githubUserName: "yogesh17csu213",
};

export const contact = {};

export const socialLinks = {
	facebook: "https://www.facebook.com/profile.php?id=100009376238157&__nodl",
	instagram: "https://www.instagram.com/yogesh_sharma1885/",
	twitter: "https://twitter.com/yogesh6604",
	github: "https://github.com/yogesh17csu213",
	linkedin: "https://www.linkedin.com/in/yogesh-sharma-8702a3148",
};

export const skillsSection = {
	title: "What I do ?",
	subTitle:
		" A Crazy Full Stack Junior Developer Who Wants To Explore Every Tech Stack !!",
	skills: [
		emoji(
			"⚡ Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model."
		),
		emoji(
			"⚡ Thorough understanding of React.js and its core principles."
		),
		emoji(
			"⚡ I have experience with Webpack, Babel, Lazy Loading and Virtualization too."
		),
		emoji(
			"⚡ Maximized application's efficiency, data quality, scope, operability and flexibility. "
		),
		emoji(
			"⚡ Planned, wrote, and debugged web applications and software with complete accuracy."
		),
	],

	softwareSkills: [
		{
			skillName: "html-5",
			fontAwesomeClassname: "vscode-icons:file-type-html",
		},
		{
			skillName: "css3",
			fontAwesomeClassname: "vscode-icons:file-type-css",
		},
		{
			skillName: "sass",
			fontAwesomeClassname: "logos:sass",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		{
			skillName: "reactjs",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		{
			skillName: "nodejs",
			fontAwesomeClassname: "logos:nodejs-icon",
		},

		{
			skillName: "npm",
			fontAwesomeClassname: "vscode-icons:file-type-npm",
		},
		{
			skillName: "sql-database",
			fontAwesomeClassname: "vscode-icons:file-type-sql",
		},
		{
			skillName: "firebase",
			fontAwesomeClassname: "logos:firebase",
		},
		{
			skillName: "python",
			fontAwesomeClassname: "logos:python",
		},
		{
			skillName: "git",
			fontAwesomeClassname: "logos:git-icon",
		},

	],
};

export const SkillBars = [
	{
		Stack: "React JS", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Redux",
		progressPercentage: "90",
	},
	{
		Stack: "HTML",
		progressPercentage: "80",
	},
	{
		Stack: "CSS/SCSS",
		progressPercentage: "75",
	},
	{
		Stack: "Node JS",
		progressPercentage: "65",
	},
	{
		Stack: "Programming in JAVA",
		progressPercentage: "85",
	},
];

export const educationInfo = [
	{
		schoolName: "The Northcap University",
		subHeader: "Bachelor of Science in Computer Science",
		duration: "July 2017 - May 2021",
		desc: "GPA : 7.77",
		descBullets: [
			"Participated in Cyber Threat Competition organized by Deloitte and became the finalist among top 39 teams all over India.",
			"Project Head at Enactus Ncu",
			"Student Coordinator in Placement Cell"
		],
	},
	{
		schoolName: "Chiranjiv Bharati School, Palam Vihar",
		subHeader: "Class-12th Non-Medical",
		duration: "April 2016 - May 2017",
		desc: "GPA : 8.34",
		// descBullets: [
		// 	"Lorem ipsum dolor sit amet, consectetfgur adipiscing elit",
		// 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		// ],
	},
	{
		schoolName: "Lord Jesus Public School",
		subHeader: "Class-10th",
		duration: "April 2014 - May 2015",
		desc: "GPA : 8.45",
		// descBullets: [
		// 	"",
		// ],
	},
];

export const experience = [
	{
		role: "Software Developer",
		company: "Careers360",
		companylogo: career,
		date: "July 2021 – Present",
		desc: "Here i am working on a Edu-tech platform. This platform provides student to prepare for different types of entrance exams and they can give mock tests too. My role is to create and add features in react with maintaining its state through redux.",
	}
	,
	{
		role: "Software Engineer Intern",
		company: "Investwell",
		companylogo: iwell,
		date: "Jan 2021 – July 2021",
		desc: "I had experience of the Fin-tech platfrom here. I was working on the project MINT. Its sole purpose was to handle the all amount of data for broker and help him to handle his clients so that they can invest in shares and mutual funds smoothly.",
		// descBullets: [
		// 	"",
		// 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		// ],
	},
	{
		role: "Software Engineer Intern",
		company: "Pie Info Systems",
		companylogo: pie,
		date: "May 2020 – August 2020",
		desc: "My role here was to develop the UI of an Educational Training Platform of IIT Delhi Nano-Tech Department Here i was having more  HTML and CSS part.",
	},
];

export const projects = [
	{
		name: "Spotify Clone",
		desc: "Here i have tried to make a clone of Spotify using the third party api of Spotify for developers.",
		github: "https://github.com/yogesh17csu213",
		link: "https://github.com/yogesh17csu213/SpotifyCloneReact",
	},
	{
		name: "Product-App",
		desc: "It was my first project in react. It is basically have a crud functionality only. But i have learned new concepts by using Redux Hooks and Redux Form with React JS here.",
		github: "https://github.com/yogesh17csu213",
		link: "https://github.com/yogesh17csu213/ProductApp",
	},
	{
		name: "React-Mail",
		desc: "Here i was trying to make an E-mailing application like outlook. I tried to implement basic functionalities of storing, viewing and deleting email in 4-5 hrs from scratch.",
		github: "https://github.com/yogesh17csu213",
		link: "https://github.com/yogesh17csu213/react-mail",
	},
];

export const feedbacks = [
	{
		name: "Hassan Mehmood",
		feedback:
			"We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Yogesh Sharma has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on daily reports so we know how our site is doing. I would recommend that u have choose Yogesh web developer services for u.",
	},
	{
		name: "Maheen Altaf",
		feedback:
			"the website is very nice, everything was perfectly made as i need. it just loads in moments, without giving u the chance to wait. the quality is also very amazing. i am using it without any problem. great job",
	},
];
