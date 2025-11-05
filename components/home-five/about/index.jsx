import FadeInLeft from "@/components/animation/FadeInLeft";
import FadeInUp from "@/components/animation/FadeInUp";
import Image from "next/image";
import Link from "next/link";
import Thumb1Img from "../../../public/images/v5/thumb1.png";
function About() {
	return (
		<div className="section aximo-section-padding4">
			<div className="container">
				<div className="row">
					<div className="col-lg-5">
						<FadeInLeft className="aximo-content-thumb3 ">
							<Image src={Thumb1Img} alt="Thumb" sizes="100vw" />
						</FadeInLeft>
					</div>
					<div className="col-lg-7 d-flex align-items-center">
						<div className="aximo-default-content libre-font m-left-gap-small">
							<h2>Making your brand bigger than ever</h2>
							<p>
								We help businesses & organizations promote their products, services or brands in the
								online world with 12 years of experience. We have become a leader in digital
								experiences, web design, and branding.{" "}
							</p>
							<p>
								We love what we do with our clients to ensure their positioning and digital
								transformation ensure the business meets every standard.
							</p>
							<FadeInUp className="aximo-btn-wrap">
								<Link className="aximo-default-btn pill corn-btn" href="/contact-us">
									<span className="aximo-label-up">Explore more</span>
									<span className="aximo-label-up">Explore more</span>
								</Link>
							</FadeInUp>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
