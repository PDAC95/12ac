import FadeInRight from "@/components/animation/FadeInRight";
import Image from "next/image";
import HeroThumbImg from "../../../public/images/v1/hero-thumb.png";
import PlayBtnImg from "../../../public/images/v1/play-btn.svg";
function HeroThumbs() {
	return (
		<FadeInRight className="aximo-hero-thumb" style={{ position: "relative" }}>
			<Image src={HeroThumbImg} alt="Hero thumb" sizes="100vw" priority />
			<div
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
			</div>
		</FadeInRight>
	);
}

export default HeroThumbs;
