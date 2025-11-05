import FadeInRight from "@/components/animation/FadeInRight";
import Image from "next/image";
import ThumbImg from "../../../public/images/v3/hero-thumb.png";
import ShapeAynaImg from "../../../public/images/v3/shape-ayna.png";
import ShapeMonitorImg from "../../../public/images/v3/shape-monitor.png";
import StarShapeImg from "../../../public/images/v3/star-shape.png";
function HeroThumb() {
	return (
		<div className="aximo-hero-thumb3-wrap">
			<div className="aximo-hero-thumb3">
				<Image src={ThumbImg} alt=" Thumb" sizes="100vw" priority />
				<div className="aximo-hero-thumb-shape2">
					<Image src={ShapeMonitorImg} alt="ShapeMonitorImg" sizes="100vw" />
				</div>
				<div className="aximo-hero-thumb-shape3">
					<Image src={ShapeAynaImg} alt="ShapeAynaImg" sizes="100vw" />
				</div>
			</div>
			<FadeInRight className="aximo-hero-thumb-shape1">
				<Image src={StarShapeImg} alt="StarShapeImg" sizes="100vw" />
			</FadeInRight>
		</div>
	);
}

export default HeroThumb;
