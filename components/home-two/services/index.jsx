import Image from "next/image";
import StarImg from "../../../public/images/v2/shape-star.png";
import ServiceCard from "./ServiceCard";

const servicesData = [
	{
		id: crypto.randomUUID(),
		title: "Product Development",
		description:
			"We are focused on developing innovative products services. We research and development to create new solutions.",
	},
	{
		id: crypto.randomUUID(),
		title: "Consulting & Advisory",
		description:
			"Our expertise in various fields, such as management, finance, marketing, or technology, to help businesses solve problems.",
	},
	{
		id: crypto.randomUUID(),
		title: "Investment and Equity",
		description:
			"We invest in startups or take an equity stake in exchange or direct investment or have their own seed funds to support.",
	},
	{
		id: crypto.randomUUID(),
		title: "Co-Working Spaces",
		description:
			"We provide co-working spaces or office facilities for startups can work, collaborate, and access essential resources.",
	},
	{
		id: crypto.randomUUID(),
		title: "Legal & Administrative",
		description:
			"Offer legal and administrative assistance, helping startups with tasks like business registration, intellectual property etc.",
	},
];

function Services() {
	return (
		<div className="section aximo-section-padding position-relative">
			<div className="container">
				<div className="aximo-section-title center clash-grotesk">
					<h2>Services to increase chances of success</h2>
				</div>
			</div>
			<div className="aximo-increase-shape">
				<Image src={StarImg} alt="StarImg" sizes="100vw" />
			</div>
			<div className="aximo-service-increase-wrap">
				{servicesData.map((service) => (
					<ServiceCard key={service.id} service={service} />
				))}
			</div>
		</div>
	);
}

export default Services;
