import Image from "next/image";
import HeroShape from "../../../public/images/v7/hero-shape.png";
import HeroThumbImg from "../../../public/images/v7/hero-thumb.png";
import HeroContent from "./HeroContent";

function Hero() {
	return (
		<div className="aximo-hero-section7">
			<div className="container">
				<div className="row aximo_screenfix_right">
					<div className="col-lg-6 d-flex align-items-center">
						<HeroContent />
					</div>
					<div className="col-lg-6">
						<div className="aximo-hero-thumb7">
							<Image src={HeroThumbImg} alt=" Thumb" sizes="100vw" priority />
						</div>
					</div>
				</div>
			</div>
			<div className="aximo-hero-shapev7">
				<Image src={HeroShape} alt="Hero Shape" />
			</div>
		</div>
	);
}

export default Hero;
