import Image from "next/image";

function FeatureCard({ feature: { title, description, img } }) {
	return (
		<div className="aximo-iconbox-wrap7">
			<div className="aximo-iconbox-icon7">
				<Image src={img} alt={title} sizes="100vw" />
			</div>
			<div className="aximo-iconbox-data7">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default FeatureCard;
