import Image from "next/image";
import Star2Img from "./star2.png";

function Content() {
	return (
		<div className="aximo-default-content">
			<h2>
				How we work{" "}
				<span className="aximo-title-animation">
					with you
					<span className="aximo-title-icon">
						<Image src={Star2Img} alt="Star2Img" />
					</span>
				</span>
			</h2>
			<p>
				We believe in transparency and collaboration at every step. From discovery to delivery, you're part of the process—ensuring the final solution truly fits your vision.
			</p>
		</div>
	);
}

export default Content;
