import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "@/components/animation/FadeInStaggerTwo";
import Image from "next/image";
import Link from "next/link";
import ShapeImg from "../../../public/images/v1/shape1.png";
import StarImg from "../../../public/images/v1/star.png";
import User1Img from "../../../public/images/v1/user1.png";
import User2Img from "../../../public/images/v1/user2.png";
import User3Img from "../../../public/images/v1/user3.png";
import PlayBtnImg from "../../../public/images/icon/play-circle.svg";
function HeroContent() {
	return (
		<FadeInStaggerTwo className="aximo-hero-content">
			<FadeInStaggerTwoChildren>
				<h1>
					<span className="aximo-title-animation">
						Shaping Your
						<Image src={StarImg} alt="StarImg" />
					</span>{" "}
					Vision
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
						<div className="aximo-hero-user-thumb-item" style={{ position: "relative" }}>
							<Image src={User1Img} alt="Client 1" />
							<div
								className="video-overlay-small"
								style={{
									position: "absolute",
									top: "50%",
									left: "50%",
									transform: "translate(-50%, -50%)",
									cursor: "pointer",
									zIndex: 10,
								}}
							>
								<Image src={PlayBtnImg} alt="Play" width={30} height={30} />
								<div
									className="video-tooltip-small"
									style={{
										position: "absolute",
										bottom: "-40px",
										left: "50%",
										transform: "translateX(-50%)",
										backgroundColor: "#000",
										color: "#fff",
										padding: "6px 12px",
										borderRadius: "6px",
										whiteSpace: "nowrap",
										fontSize: "12px",
										opacity: 0,
										transition: "opacity 0.3s ease",
										pointerEvents: "none",
									}}
								>
									See how we develop custom software
								</div>
							</div>
						</div>
						<div className="aximo-hero-user-thumb-item" style={{ position: "relative" }}>
							<Image src={User3Img} alt="Client 2" />
							<div
								className="video-overlay-small"
								style={{
									position: "absolute",
									top: "50%",
									left: "50%",
									transform: "translate(-50%, -50%)",
									cursor: "pointer",
									zIndex: 10,
								}}
							>
								<Image src={PlayBtnImg} alt="Play" width={30} height={30} />
								<div
									className="video-tooltip-small"
									style={{
										position: "absolute",
										bottom: "-40px",
										left: "50%",
										transform: "translateX(-50%)",
										backgroundColor: "#000",
										color: "#fff",
										padding: "6px 12px",
										borderRadius: "6px",
										whiteSpace: "nowrap",
										fontSize: "12px",
										opacity: 0,
										transition: "opacity 0.3s ease",
										pointerEvents: "none",
									}}
								>
									See our creative design process
								</div>
							</div>
						</div>
						<div className="aximo-hero-user-thumb-item" style={{ position: "relative" }}>
							<Image src={User2Img} alt="Client 3" />
							<div
								className="video-overlay-small"
								style={{
									position: "absolute",
									top: "50%",
									left: "50%",
									transform: "translate(-50%, -50%)",
									cursor: "pointer",
									zIndex: 10,
								}}
							>
								<Image src={PlayBtnImg} alt="Play" width={30} height={30} />
								<div
									className="video-tooltip-small"
									style={{
										position: "absolute",
										bottom: "-40px",
										left: "50%",
										transform: "translateX(-50%)",
										backgroundColor: "#000",
										color: "#fff",
										padding: "6px 12px",
										borderRadius: "6px",
										whiteSpace: "nowrap",
										fontSize: "12px",
										opacity: 0,
										transition: "opacity 0.3s ease",
										pointerEvents: "none",
									}}
								>
									See how we scale businesses
								</div>
							</div>
						</div>
					</div>
					<div className="aximo-hero-user-data">
						<p>See how we transform ideas into reality</p>
					</div>
				</div>
				<style jsx>{`
					.video-overlay-small:hover .video-tooltip-small {
						opacity: 1;
					}
				`}</style>
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren>
				<Link className="aximo-call-btn" href="/about-us">
					How We Work <i className="icon-arrow-right"></i>
				</Link>
				<div className="aximo-hero-shape">
					<Image src={ShapeImg} alt="ShapeImg" />
				</div>
			</FadeInStaggerTwoChildren>
		</FadeInStaggerTwo>
	);
}

export default HeroContent;
