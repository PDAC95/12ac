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

							{/* Process Steps */}
							<div style={{ marginTop: "40px" }}>
								<div style={{ marginBottom: "30px" }}>
									<h3 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "10px" }}>
										<span style={{ color: "var(--accent-bg)", marginRight: "10px" }}>1</span>
										Discovery & Planning
									</h3>
									<p>
										Reach out and we'll listen carefully to understand your goals, challenges, and what success looks like for your business.
									</p>
								</div>
								<div style={{ marginBottom: "30px" }}>
									<h3 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "10px" }}>
										<span style={{ color: "var(--accent-bg)", marginRight: "10px" }}>2</span>
										Building Together
									</h3>
									<p>
										We become your partners in progress, collaborating closely through design, development, and regular check-ins.
									</p>
								</div>
								<div>
									<h3 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "10px" }}>
										<span style={{ color: "var(--accent-bg)", marginRight: "10px" }}>3</span>
										Launch & Growth
									</h3>
									<p>
										We continuously monitor performance and optimize to ensure your solution delivers the results you need.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WhyChooseUs;
