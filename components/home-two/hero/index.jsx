import HeroContent from "./HeroContent";
import HeroThumbs from "./HeroThumbs";

import Image from "next/image";
import ShapeStarImg from "../../../public/images/v2/shape-star.png";
import Shape1Img from "../../../public/images/v2/shape1.png";

function Hero() {
	return (
		<div className="aximo-hero-section2">
			<div className="container position-relative">
				<HeroContent />
				<div className="aximo-hero-shape1">
					<Image src={Shape1Img} alt="Shape" />
				</div>
				<div className="aximo-hero-shape2">
					<Image src={ShapeStarImg} alt="ShapeStarImg" />
				</div>
			</div>
			<HeroThumbs />
		</div>
	);
}

export default Hero;
