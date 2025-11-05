import About from "@/components/home-one/about";
import Hero from "@/components/home-one/hero";
import Projects from "@/components/home-one/projects";
import Services from "@/components/home-one/services";
import WhyChooseUs from "@/components/home-one/why-choose-us";

const servicesData = [
	{
		id: crypto.randomUUID(),
		title: "Custom Software & Apps",
		description:
			"We build web platforms, mobile apps, and enterprise software tailored to your business needs. From concept to deployment, we create scalable solutions that grow with you.",
		icon: "icon-web",
	},
	{
		id: crypto.randomUUID(),
		title: "AI Solutions & Automation",
		description:
			"We integrate intelligent features that work smarter for you. From chatbots to predictive analytics, we help you automate processes and enhance user experiences with cutting-edge AI.",
		icon: "icon-design-thinking",
	},
	{
		id: crypto.randomUUID(),
		title: "Digital Marketing & Branding",
		description:
			"We amplify your brand and drive results. SEO, social media, content strategy, and paid ads—we create data-driven campaigns that turn visibility into growth.",
		icon: "icon-branding",
	},
	{
		id: crypto.randomUUID(),
		title: "Dedicated Teams",
		description:
			"Need to scale fast? We provide expert developers, designers, and project managers who integrate seamlessly into your workflow. Hire by the month, project, or sprint.",
		icon: "icon-design-tools",
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
		</>
	);
}
