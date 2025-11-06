import FadeInStagger from "@/components/animation/FadeInStagger";
import Link from "next/link";
import ServiceCard from "./ServiceCard";

const serviceData = [
	{
		id: crypto.randomUUID(),
		title: "Custom Software & Apps",
		description:
			"We build web platforms, mobile apps, and enterprise software tailored to your business needs. From concept to deployment, we create scalable solutions that grow with you.",
		iconClass: "icon-database",
	},
	{
		id: crypto.randomUUID(),
		title: "AI Solutions & Automation",
		description:
			"We integrate intelligent features that work smarter for you. From chatbots to predictive analytics, we help you automate processes and enhance user experiences with cutting-edge AI.",
		iconClass: "icon-idea-bulb",
	},
	{
		id: crypto.randomUUID(),
		title: "Digital Marketing & Branding",
		description:
			"We amplify your brand and drive results. SEO, social media, content strategy, and paid ads—we create data-driven campaigns that turn visibility into growth.",
		iconClass: "icon-data-analysis-1",
	},
	{
		id: crypto.randomUUID(),
		title: "Dedicated Teams",
		description:
			"Need to scale fast? We provide expert developers, designers, and project managers who integrate seamlessly into your workflow. Hire by the month, project, or sprint.",
		iconClass: "icon-project-management",
	},
];
function Services() {
	return (
		<div className="section aximo-section-padding3 position-relative">
			<div className="container">
				<div className="aximo-section-title arimo-font">
					<div className="row">
						<div className="col-lg-7">
							<span className="aximo-subtitle">How we work across our services</span>
							<p style={{ fontSize: '1.25rem', marginTop: '10px', color: '#666' }}>Four videos, four ways we help businesses grow. See our process in action for each area we specialize in.</p>
						</div>
						<div className="col-lg-5 d-flex align-items-end justify-content-end">
							<div className="aximo-title-btn">
								<Link className="aximo-default-btn pill" style={{ backgroundColor: '#ff4612', color: '#ffffff' }} href="/service">
									View all services
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					{serviceData.map((service, index) => (
						<FadeInStagger key={service.id} index={index} className="col-lg-6 d-flex">
							<ServiceCard service={service} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</div>
	);
}

export default Services;
