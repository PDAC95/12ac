import FadeInRight from "@/components/animation/FadeInRight";
import Image from "next/image";
import HeroThumbImg from "../../../public/images/v1/hero-thumb.png";
import PlayBtnImg from "../../../public/images/icon/play-circle.svg";
function HeroThumbs() {
	return (
		<FadeInRight className="aximo-hero-thumb" style={{ position: "relative" }}>
			<Image src={HeroThumbImg} alt="Hero thumb" sizes="100vw" priority />
			<div
				className="video-overlay-group"
				style={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					cursor: "pointer",
					zIndex: 10,
				}}
			>
				<Image src={PlayBtnImg} alt="Play video" width={80} height={80} />
				<div
					className="video-tooltip"
					style={{
						position: "absolute",
						bottom: "-50px",
						left: "50%",
						transform: "translateX(-50%)",
						backgroundColor: "#000",
						color: "#fff",
						padding: "8px 16px",
						borderRadius: "8px",
						whiteSpace: "nowrap",
						fontSize: "14px",
						opacity: 0,
						transition: "opacity 0.3s ease",
						pointerEvents: "none",
					}}
				>
					See how we build innovative solutions
				</div>
			</div>
			<style jsx>{`
				.video-overlay-group:hover .video-tooltip {
					opacity: 1;
				}
			`}</style>
		</FadeInRight>
	);
}

export default HeroThumbs;
