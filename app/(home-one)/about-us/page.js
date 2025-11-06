import Story from "@/components/about/story";
import BreadCrumb from "@/components/common/Breadcrumb";
import About from "@/components/home-one/about";

function AboutUs() {
	return (
		<>
			<BreadCrumb title="About Us" />
			<About />
			<Story />
		</>
	);
}

export default AboutUs;
