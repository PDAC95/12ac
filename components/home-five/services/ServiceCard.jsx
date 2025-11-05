import Image from "next/image";
import Link from "next/link";
function ServiceCard({ service: { title, description, img } }) {
	return (
		<div className="aximo-marketing-services-item">
			<div className="aximo-marketing-services-icon">
				<Image src={img} alt="icon" sizes="100vw" />
				<h3>{title}:</h3>
			</div>
			<div className="aximo-marketing-services-data">
				<p>{description}</p>
			</div>
			<div className="aximo-marketing-services-btn">
				<Link
					className="aximo-default-btn aximo-default-btn-outline pill outline-white marketing-services-btn"
					href="/single-service"
				>
					Choose Service
				</Link>
			</div>
		</div>
	);
}

export default ServiceCard;
