import FadeInLeft from "@/components/animation/FadeInLeft";
import Image from "next/image";
import Shape2Img from "../../../public/images/v4/shape2.png";
import Thumb1Img from "../../../public/images/v4/thumb1.png";
function WhyChooseUs() {
	return (
		<div className="section">
			<div className="container">
				<div className="row">
					<div className="col-lg-5">
						<FadeInLeft className="aximo-content-thumb border-radius ">
							<Image src={Thumb1Img} alt="Thumb1Img" sizes="100vw" />
							<div className="aximo-thumb-shape4">
								<Image src={Shape2Img} alt="Shape2Img" />
							</div>
						</FadeInLeft>
					</div>
					<div className="col-lg-7">
						<div className="aximo-default-content arimo-font m-left-gap">
							<span className="aximo-subtitle">Why choose us</span>
							<h2>We help businesses turn ideas into reality</h2>
							<p>
								In today&apos;s fast-paced digital world, you need a technology partner that understands your challenges and delivers real solutions. Our experience, flexibility, and commitment to quality make us the right choice for businesses ready to grow.
							</p>
							<p>
								<strong>15+ Years of Combined Expertise:</strong> Our team brings deep technical knowledge across software development, AI, mobile apps, and digital strategy.
							</p>
							<p>
								<strong>Results-Driven Approach:</strong> We don&apos;t just build—we deliver solutions that work, scale, and drive measurable business outcomes.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WhyChooseUs;
