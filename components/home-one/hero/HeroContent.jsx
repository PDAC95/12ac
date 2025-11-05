import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "@/components/animation/FadeInStaggerTwo";
import Image from "next/image";
import Link from "next/link";
import ShapeImg from "../../../public/images/v1/shape1.png";
import StarImg from "../../../public/images/v1/star.png";
import User1Img from "../../../public/images/v1/user1.png";
import User2Img from "../../../public/images/v1/user2.png";
import User3Img from "../../../public/images/v1/user3.png";
function HeroContent() {
	return (
		<FadeInStaggerTwo className="aximo-hero-content">
			<FadeInStaggerTwoChildren>
				<h1>
					<span className="aximo-title-animation">
						Shaping Your Vision
						<Image src={StarImg} alt="StarImg" />
					</span>
					<br />
					<span style={{ fontSize: '0.8em' }}>with Technology</span>
				</h1>
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren>
				<p>
					{`We empower businesses through custom software solutions that drive efficiency, innovation, and growth.
					Combining creativity and technical expertise to keep our clients ahead in the ever-evolving digital landscape.`}
				</p>
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren>
				<div className="aximo-hero-user-wrap">
					<div className="aximo-hero-user-thumb">
						<div className="aximo-hero-user-thumb-item">
							<Image src={User1Img} alt="Client 1" />
						</div>
						<div className="aximo-hero-user-thumb-item">
							<Image src={User3Img} alt="Client 2" />
						</div>
						<div className="aximo-hero-user-thumb-item">
							<Image src={User2Img} alt="Client 3" />
						</div>
					</div>
					<div className="aximo-hero-user-data">
						<p>Trusted by businesses worldwide</p>
					</div>
				</div>
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren>
				<Link className="aximo-call-btn" href="/contact-us">
					Start Your Project <i className="icon-call"></i>
				</Link>
				<div className="aximo-hero-shape">
					<Image src={ShapeImg} alt="ShapeImg" />
				</div>
			</FadeInStaggerTwoChildren>
		</FadeInStaggerTwo>
	);
}

export default HeroContent;
