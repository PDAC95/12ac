import Image from "next/image";
import Call2Img from "../../public/images/icon/call2.svg";
import EmailImg from "../../public/images/icon/email.svg";
import MapImg from "../../public/images/icon/map.svg";
import Star2Img from "../../public/images/v1/star2.png";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../animation/FadeInStaggerTwo";
function ContactInfo() {
	return (
		<div className="aximo-contact-info-section">
			<div className="container">
				<div className="aximo-contact-info-title">
					<h2>
						<span className="aximo-title-animation">
							Contact Information
							<span className="aximo-title-icon">
								<Image src={Star2Img} alt="Star" />
							</span>
						</span>
					</h2>
				</div>
				<FadeInStaggerTwo className="row">
					<FadeInStaggerTwoChildren className="col-xl-4 col-md-6 d-flex">
						<div className="aximo-contact-info-box w-100 h-100 d-flex flex-column">
							<div className="aximo-contact-info-icon">
								<Image src={Call2Img} alt="Call Img" />
							</div>
							<div className="aximo-contact-info-data flex-grow-1">
								<span>Call us</span>
								<p>+1 226 341 9961</p>
							</div>
						</div>
					</FadeInStaggerTwoChildren>
					<FadeInStaggerTwoChildren className="col-xl-4 col-md-6 d-flex">
						<div className="aximo-contact-info-box w-100 h-100 d-flex flex-column">
							<div className="aximo-contact-info-icon">
								<Image src={EmailImg} alt="Email" />
							</div>
							<div className="aximo-contact-info-data flex-grow-1">
								<span>Email us</span>
								<p>hello@ac95.ca</p>
							</div>
						</div>
					</FadeInStaggerTwoChildren>
					<FadeInStaggerTwoChildren className="col-xl-4 col-md-6 d-flex">
						<div className="aximo-contact-info-box w-100 h-100 d-flex flex-column">
							<div className="aximo-contact-info-icon">
								<Image src={MapImg} alt="Map" />
							</div>
							<div className="aximo-contact-info-data flex-grow-1">
								<span>Office address</span>
								<p>151 Charles St W Suite 100, Kitchener, ON N2G 1H6</p>
							</div>
						</div>
					</FadeInStaggerTwoChildren>
				</FadeInStaggerTwo>
			</div>
		</div>
	);
}

export default ContactInfo;
