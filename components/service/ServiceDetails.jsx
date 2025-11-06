import Image from "next/image";
import SingleImg from "../../public/images/service/service-single.png";
import Star2Img from "../../public/images/v1/star2.png";
import FadeInUp from "../animation/FadeInUp";
import WorkingApproach from "./WorkingApproach";

function ServiceDetails({ serviceData }) {
	return (
		<div className="section aximo-section-padding2 pb-0">
			<div className="container">
				<div className="aximo-service-details-wrap">
					<FadeInUp className="aximo-service-details-thumb">
						<Image src={SingleImg} alt="Single img" sizes="100vw" />
					</FadeInUp>
					<div className="row">
						<div className="col-lg-8">
							<div className="aximo-default-content">
								<h2>
									<span className="aximo-title-animation">
										{serviceData.title}
										<span className="aximo-title-icon">
											<Image src={Star2Img} alt="star" />
										</span>
									</span>
									{serviceData.subtitle}
								</h2>
								<p>{serviceData.description1}</p>
								<p>{serviceData.description2}</p>
							</div>
						</div>
					</div>
					<div className="row">
						{serviceData.features.map((feature, index) => (
							<div key={feature.id} className="col-lg-6">
								<div className="aximo-user-interface">
									<h3>{index + 1}/ {feature.title}:</h3>
									<ul>
										{feature.items.map((item, itemIndex) => (
											<li key={itemIndex}>{item}</li>
										))}
									</ul>
								</div>
							</div>
						))}
					</div>
					<div className="aximo-faq-wrap">
						<WorkingApproach approachData={serviceData.approach} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default ServiceDetails;
