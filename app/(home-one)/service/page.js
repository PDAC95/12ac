"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import BreadCrumb from "@/components/common/Breadcrumb";
import TwoColumnFaq from "@/components/contact/TwoColumnFaq";
import Services from "@/components/home-one/services";
import WhyChooseUs from "@/components/home-one/why-choose-us";

const services = [
	{
		id: crypto.randomUUID(),
		title: "AI Integration & Automation",
		description:
			"Smart chatbots, predictive analytics, and intelligent process automation that save time and money.",
		icon: "icon-design-thinking",
		slug: "ai-automation",
		category: "ai",
	},
	{
		id: crypto.randomUUID(),
		title: "Custom Software Development",
		description:
			"We turn your ideas into reality—from simple tools to complex platforms tailored to your business needs.",
		icon: "icon-design-tools",
		slug: "custom-software",
		category: "software",
	},
	{
		id: crypto.randomUUID(),
		title: "E-commerce Development",
		description:
			"Complete online stores with secure payments, inventory systems, and conversion-optimized experiences.",
		icon: "icon-layers",
		slug: "ecommerce",
		category: "software",
	},
	{
		id: crypto.randomUUID(),
		title: "Mobile App Development",
		description:
			"iOS and Android apps that users love—from concept to App Store launch.",
		icon: "icon-target-1",
		slug: "mobile-apps",
		category: "software",
	},
	{
		id: crypto.randomUUID(),
		title: "Web Development",
		description:
			"Fast, responsive, and scalable websites built to perform—from landing pages to full web applications.",
		icon: "icon-web",
		slug: "web-development",
		category: "software",
	},
	{
		id: crypto.randomUUID(),
		title: "Digital Marketing & SEO",
		description:
			"Data-driven strategies that boost visibility, drive traffic, and convert visitors into customers.",
		icon: "icon-rating-stars-1",
		slug: "digital-marketing",
		category: "marketing",
	},
	{
		id: crypto.randomUUID(),
		title: "Dedicated Development Teams",
		description:
			"Expert developers and designers who integrate with your team to accelerate delivery.",
		icon: "icon-chef",
		slug: "dedicated-teams",
		category: "team",
	},
	{
		id: crypto.randomUUID(),
		title: "Brand Strategy & Design",
		description:
			"Visual identity, logos, and brand positioning that make your business stand out in the market.",
		icon: "icon-branding",
		slug: "branding",
		category: "marketing",
	},
];

const filters = [
	{ id: "all", label: "All" },
	{ id: "software", label: "Custom Software & Apps" },
	{ id: "ai", label: "AI Solutions & Automation" },
	{ id: "marketing", label: "Digital Marketing & Branding" },
	{ id: "team", label: "Dedicated Teams" },
];

function ServicePage() {
	const searchParams = useSearchParams();
	const filterParam = searchParams.get("filter");

	const [activeFilter, setActiveFilter] = useState("all");

	useEffect(() => {
		// Set initial filter from URL query parameter
		if (filterParam && ["all", "software", "ai", "marketing", "team"].includes(filterParam)) {
			setActiveFilter(filterParam);
		}
	}, [filterParam]);

	const filteredServices = activeFilter === "all"
		? services
		: services.filter(service => service.category === activeFilter);

	return (
		<>
			<BreadCrumb title="Service" />
			<Services
				services={filteredServices}
				filters={filters}
				activeFilter={activeFilter}
				onFilterChange={setActiveFilter}
			/>
			<WhyChooseUs />
			<TwoColumnFaq />
		</>
	);
}

export default ServicePage;
