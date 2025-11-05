import FadeInRight from "@/components/animation/FadeInRight";
import Image from "next/image";
import CheckImg from "../../../public/images/v7/check.png";
import ThumbImg from "../../../public/images/v7/thumb2.png";
function AboutTwo() {
	return (
		<div className="section aximo-section-padding6">
			<div className="container">
				<div className="row">
					<div className="col-lg-5 order-lg-2">
						<FadeInRight className="aximo-content-thumb ">
							<Image src={ThumbImg} alt="thumb" sizes="100vw" />
						</FadeInRight>
					</div>
					<div className="col-lg-7">
						<div className="aximo-default-content bricolage-font">
							<h2>Identifying the most appropriate media channels</h2>
							<p>
								We identify the most appropriate media channels to reach the target audience. We
								negotiate & purchase advertising space or time, optimizing placement for maximum impact
								and cost-effectiveness.
							</p>
							<div className="aximo-list-icon2">
								<ul>
									<li>
										<Image src={CheckImg} alt="check mark" />
										<span>Creative Development: </span> We are responsible for creating attractive
										and eye-catching advertisements across various platforms.
									</li>
									<li>
										<Image src={CheckImg} alt="check mark" />
										<span>Media Planning and Buying:</span> We negotiate and purchase advertising
										space or time, optimizing placement for maximum impact.
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutTwo;
