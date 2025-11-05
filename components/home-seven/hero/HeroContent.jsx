import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "@/components/animation/FadeInStaggerTwo";
import Image from "next/image";
import Link from "next/link";
import TitleShapImg from "../../../public/images/v7/title-shape.png";
function HeroContent() {
	return (
		<FadeInStaggerTwo className="aximo-hero-content7">
			<FadeInStaggerTwoChildren>
				<h1>
					We present your brand creatively
					<span className="aximo-hero-shape-title2">
						<Image className="aximo-hero-wave-shape" src={TitleShapImg} alt="Shape Title" />
					</span>
				</h1>
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren>
				<p>
					Our advertising agency specializes in creating captivating and visually stunning campaigns that
					leave a lasting impression on audiences to elevate your brand to new heights.
				</p>
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren>
				<div className="aximo-hero-btn-wrap m-0">
					<Link className="aximo-default-btn blue-btn2" href="/contact-us">
						<span className="aximo-label-up">Get In Touch</span>
						<span className="aximo-label-up">Get In Touch</span>
					</Link>
					<Link className="aximo-default-btn aximo-default-btn-outline outline-dark" href="/service">
						<span className="aximo-label-up">Explore Our Services</span>
						<span className="aximo-label-up">Explore Our Services</span>
					</Link>
				</div>
			</FadeInStaggerTwoChildren>
		</FadeInStaggerTwo>
	);
}

export default HeroContent;
