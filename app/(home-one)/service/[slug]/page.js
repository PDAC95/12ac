import { servicesDetailData } from "@/data/servicesData";
import BreadCrumb from "@/components/common/Breadcrumb";
import ServiceDetails from "@/components/service/ServiceDetails";
import { notFound } from "next/navigation";

export default function ServiceDetailPage({ params }) {
	const { slug } = params;
	const serviceData = servicesDetailData[slug];

	if (!serviceData) {
		notFound();
	}

	return (
		<>
			<BreadCrumb title={serviceData.title} />
			<ServiceDetails serviceData={serviceData} />
		</>
	);
}

// Generate static params for all services
export async function generateStaticParams() {
	return Object.keys(servicesDetailData).map((slug) => ({
		slug: slug,
	}));
}
