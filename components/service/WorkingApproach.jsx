import Image from "next/image";
import Single2Img from "../../public/images/service/service-single2.png";
import Star2Img from "../../public/images/v1/star2.png";
import FadeInRight from "../animation/FadeInRight";

function WorkingApproach({ approachData }) {
	return (
		<div className="row">
			<div className="col-lg-5 offset-lg-1 order-lg-1">
				<FadeInRight className="aximo-service-details-thumb2 ">
					<Image src={Single2Img} alt="service" sizes="100vw" />
				</FadeInRight>
			</div>
			<div className="col-lg-6">
				<div className="aximo-default-content">
					<h2>
						<span className="aximo-title-animation">
							Our Approach
							<span className="aximo-title-icon">
								<Image src={Star2Img} alt="star" />
							</span>
						</span>
					</h2>
					<p>{approachData.description}</p>
				</div>
				<div className="aximo-our-approach">
					{approachData.steps.map((step) => (
						<div className="aximo-iconbox-wrap5" key={step.id}>
							<div className="aximo-iconbox-icon5">
								<i className={`${step.icon}`}></i>
							</div>
							<div className="aximo-iconbox-data5">
								<h3>{step.title}:</h3>
								<div className="aximo-user-interface">
									<ul>
										<li>{step.description}</li>
									</ul>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default WorkingApproach;
