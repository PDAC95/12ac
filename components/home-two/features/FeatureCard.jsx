import Image from "next/image";

function FeatureCard({ feature: { title, description, img } }) {
	return (
		<div className="aximo-iconbox-wrap2">
			<div className="aximo-iconbox-icon2">
				<Image src={img} alt="Illustrator1Img" sizes="100vw" />
			</div>
			<div className="aximo-iconbox-data2">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default FeatureCard;
