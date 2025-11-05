import About from "@/components/home-one/about";
import AutoSlider from "@/components/home-one/auto-slider";
import Hero from "@/components/home-one/hero";
import Projects from "@/components/home-one/projects";
import Services from "@/components/home-one/services";
import Teams from "@/components/home-one/teams";
import Testimonial from "@/components/home-one/testimonial";
import WhyChooseUs from "@/components/home-one/why-choose-us";

// Teams images
import Team1Img from "@/public/images/team/team1.png";
import Team2Img from "@/public/images/team/team2.png";
import Team3Img from "@/public/images/team/team3.png";
import Team4Img from "@/public/images/team/team4.png";

const servicesData = [
	{
		id: crypto.randomUUID(),
		title: "Web Development",
		description:
			"Custom websites with responsive design, SEO optimization, AI integration, and performance tuning for modern digital experiences.",
		icon: "icon-web",
	},
	{
		id: crypto.randomUUID(),
		title: "Mobile Apps",
		description:
			"Native iOS and Android apps, cross-platform development with React Native, and progressive web applications (PWA).",
		icon: "icon-design-tools",
	},
	{
		id: crypto.randomUUID(),
		title: "E-Commerce",
		description:
			"Complete e-commerce platforms with secure payment gateways, inventory management, and optimized performance for sales growth.",
		icon: "icon-branding",
	},
	{
		id: crypto.randomUUID(),
		title: "Software Development",
		description:
			"Custom software solutions, cloud-based applications, API development and integration for enterprise-level systems.",
		icon: "icon-design-thinking",
	},
	{
		id: crypto.randomUUID(),
		title: "Graphic Design",
		description:
			"Brand identity, logo design, marketing materials, and social media graphics that make your business stand out.",
		icon: "icon-branding",
	},
	{
		id: crypto.randomUUID(),
		title: "Digital Marketing",
		description:
			"SEO, social media management, PPC advertising, content marketing, and analytics to grow your online presence.",
		icon: "icon-web",
	},
	{
		id: crypto.randomUUID(),
		title: "Branding Solutions",
		description:
			"Brand strategy, positioning, reputation management, and social media presence to build a strong brand identity.",
		icon: "icon-design-tools",
	},
];
const teamsData = [
	{
		id: crypto.randomUUID(),
		name: "Andrew Mark",
		designation: "Creative Director",
		img: Team1Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Jack Taylor",
		designation: "Senior Designer",
		img: Team2Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Martine Joy",
		designation: "Project Manager",
		img: Team3Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Adam Straw",
		designation: "Web Developer",
		img: Team4Img,
	},
];
export default function HomeOne() {
	return (
		<>
			<Hero />
			<Services services={servicesData} />
			<About />
			<Projects />
			<WhyChooseUs />
			<Testimonial />
			<AutoSlider />
			<Teams teams={teamsData} />
		</>
	);
}
