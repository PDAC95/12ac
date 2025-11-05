import Image from "next/image";
import Link from "next/link";
import TitleShapImg from "../../../public/images/v7/title-shape.png";
function FooterTop() {
	return (
		<div className="row">
			<div className="col-lg-7">
				<h2>
					Let your brand rise to new heights
					<span className="aximo-title-shape">
						<Image src={TitleShapImg} alt="title shape" />
					</span>
				</h2>
			</div>
			<div className="col-lg-5 d-flex align-items-center">
				<div className="aximo-title-btn">
					<Link className="aximo-default-btn blue-btn2" href="/contact-us">
						<span className="aximo-label-up">Explore Our Plans</span>
						<span className="aximo-label-up">Explore Our Plans</span>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default FooterTop;
