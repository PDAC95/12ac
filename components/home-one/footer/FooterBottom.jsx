import Image from "next/image";
import LogoWhiteImg from "../../../public/images/logo/logo-white.svg";
function FooterBottom() {
	return (
		<>
			<div className="col-lg-6">
				<div className="aximo-footer-logo">
					<a href="#">
						<Image src={LogoWhiteImg} alt="Logo" />
					</a>
				</div>
			</div>
			<div className="col-lg-6">
				<div className="aximo-copywright one">
					<p>Copyright © 2024 AC95. All Rights Reserved.</p>
				</div>
			</div>
		</>
	);
}

export default FooterBottom;
