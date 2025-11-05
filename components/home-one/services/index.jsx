import FadeInStagger from "@/components/animation/FadeInStagger";
import Image from "next/image";
import Star2Img from "../../../public/images/v1/star2.png";
import ServiceCard from "./ServiceCard";

function Services({ services }) {
	return (
		<div id="services" className="section aximo-section-padding4">
			<div className="container">
				<div className="aximo-section-title center">
					<h2>
						Technology that moves
						<span className="aximo-title-animation">
							businesses forward
							<span className="aximo-title-icon">
								<Image src={Star2Img} alt="Star2Img" />
							</span>
						</span>
					</h2>
				</div>
				<div className="aximo-service-wrap">
					<div className="row">
						{services.map((item, index) => (
							<FadeInStagger key={item.id} index={index} className="col-lg-6">
								<ServiceCard service={item} />
							</FadeInStagger>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Services;
