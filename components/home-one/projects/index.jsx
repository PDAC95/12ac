"use client";
import Image from "next/image";
import { Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import AIImg from "../../../public/images/service/ai.jpg";
import SoftwareImg from "../../../public/images/service/software.jpg";
import EcommerceImg from "../../../public/images/service/ecommerce.jpg";
import BrandingImg from "../../../public/images/service/branding.jpg";
import TeamImg from "../../../public/images/service/team.jpg";
import AppsImg from "../../../public/images/service/apps.jpg";
import Project4Img from "../../../public/images/v1/project4.png";
import Star2Img from "../../../public/images/v1/star2.png";
import ProjectCard from "./ProjectCard";

const projectsData = [
	{
		id: crypto.randomUUID(),
		title: "AI Integration & Automation",
		description: "Smart chatbots, predictive analytics, and intelligent process automation that save time and money.",
		img: AIImg,
		slug: "ai-automation",
		category: "ai",
	},
	{
		id: crypto.randomUUID(),
		title: "Custom Software Development",
		description: "We turn your ideas into reality—from simple tools to complex platforms tailored to your business needs.",
		img: SoftwareImg,
		slug: "custom-software",
		category: "software",
	},
	{
		id: crypto.randomUUID(),
		title: "E-commerce Development",
		description: "Complete online stores with secure payments, inventory systems, and conversion-optimized experiences.",
		img: EcommerceImg,
		slug: "ecommerce",
		category: "software",
	},
	{
		id: crypto.randomUUID(),
		title: "Mobile App Development",
		description: "iOS and Android apps that users love—from concept to App Store launch.",
		img: AppsImg,
		slug: "mobile-apps",
		category: "software",
	},
	{
		id: crypto.randomUUID(),
		title: "Dedicated Development Teams",
		description: "Expert developers and designers who integrate with your team to accelerate delivery.",
		img: TeamImg,
		slug: "dedicated-teams",
		category: "team",
	},
	{
		id: crypto.randomUUID(),
		title: "Digital Marketing & SEO",
		description: "Data-driven strategies that boost visibility, drive traffic, and convert visitors into customers.",
		img: BrandingImg,
		slug: "digital-marketing",
		category: "marketing",
	},
	{
		id: crypto.randomUUID(),
		title: "Web Development",
		description: "Fast, responsive, and scalable websites built to perform—from landing pages to full web applications.",
		img: SoftwareImg,
		slug: "web-development",
		category: "software",
	},
];

const swiperSettings = {
	spaceBetween: 24,
	direction: "horizontal",
	pagination: {
		clickable: true,
	},
	modules: [Pagination, Mousewheel],
	mousewheel: true,
	breakpoints: {
		640: {
			slidesPerView: 1,
		},
		900: {
			slidesPerView: 2,
		},
		1600: {
			slidesPerView: 3.5,
		},
	},
};
function Projects() {
	return (
		<div className="section dark-bg aximo-section-padding">
			<div className="container">
				<div className="aximo-section-title center light">
					<h2>
						<span className="aximo-title-animation">
							Services that make
							<span className="aximo-title-icon">
								<Image src={Star2Img} alt="Star2Img" />
							</span>
						</span>{" "}
						an impact
					</h2>
				</div>
			</div>
			<div className="swiper aximo-project-slider">
				<Swiper {...swiperSettings}>
					{projectsData.map((project) => (
						<SwiperSlide key={project.id}>
							<ProjectCard project={project} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}

export default Projects;
