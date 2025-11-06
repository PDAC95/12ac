import BreadCrumb from "@/components/common/Breadcrumb";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import GoogleMap from "@/components/contact/GoogleMap";
import TwoColumnFaq from "@/components/contact/TwoColumnFaq";

function ContactUs() {
	const location = {
		center: {
			lat: 43.451168,
			lng: -80.498262,
		},
		zoom: 17,
	};
	return (
		<>
			<BreadCrumb title="Contact Us" />
			<ContactForm />
			<ContactInfo />
			<GoogleMap location={location} />
			<TwoColumnFaq />
		</>
	);
}

export default ContactUs;
