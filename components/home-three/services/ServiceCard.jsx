import Image from "next/image";
import Link from "next/link";
import ArrowRight4Img from "../../../public/images/icon/arrow-right4.svg";
function ServiceCard({ service: { title, description, img } }) {
	return (
		<div className="aximo-iconbox-wrap3">
			<div className="aximo-iconbox-icon3">
				<Image src={img} alt="Icon" sizes="100vw" />
			</div>
			<div className="aximo-iconbox-data3">
				<h3>{title}</h3>
				<p>{description}</p>
				<Link className="aximo-service-icon" href="/single-service">
					<Image src={ArrowRight4Img} alt="ArrowRight4Img" sizes="100vw" />
				</Link>
			</div>
		</div>
	);
}

export default ServiceCard;
