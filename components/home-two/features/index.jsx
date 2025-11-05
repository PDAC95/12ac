import FadeInStagger from "@/components/animation/FadeInStagger";
import Image from "next/image";
import {
	default as Illustrator1Img,
	default as Illustrator2Img,
	default as Illustrator3Img,
} from "../../../public/images/v2/illustrator1.png";
import Shape2Img from "../../../public/images/v2/shape2.png";
import FeatureCard from "./FeatureCard";
const featuresData = [
	{
		id: crypto.randomUUID(),
		title: "Reduce Uncertainty",
		description:
			"By adopting and implementing strategies, we not only help survive but also thrive in the face of uncertainty.",
		img: Illustrator1Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Innovative Ideas",
		description:
			"Our aim is to disrupt existing industries or create entirely new ones with our talents and innovative business ideas.",
		img: Illustrator2Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Growth Focus",
		description:
			"Growth is a central objective for us. We’ve also a strong emphasis on rapid growth and scaling business growth.",
		img: Illustrator3Img,
	},
];
function Features() {
	return (
		<div className="section bg-light2 aximo-section-padding3 position-relative">
			<div className="container">
				<div className="row">
					<div className="col-lg-8">
						<div className="aximo-section-title clash-grotesk">
							<h2>Features that set us apart from others</h2>
						</div>
					</div>
				</div>
				<div className="row">
					{featuresData.map((feature, index) => (
						<FadeInStagger key={feature.id} index={index} className="col-xl-4 col-md-6">
							<FeatureCard feature={feature} />
						</FadeInStagger>
					))}
				</div>
			</div>
			<div className="aximo-shape">
				<Image src={Shape2Img} alt="Shape2Img" sizes="100vw" />
			</div>
		</div>
	);
}

export default Features;
