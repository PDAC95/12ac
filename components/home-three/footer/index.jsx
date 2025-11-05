import Image from "next/image";
import Link from "next/link";
import LogoLargImg from "../../../public/images/v3/logo-large.svg";
function Footer() {
	return (
		<footer className="aximo-footer-section">
			<div className="container">
				<div className="aximo-footer-top2">
					<Link href="/">
						<Image src={LogoLargImg} alt="Logo" sizes="100vw" />
					</Link>
				</div>
				<div className="aximo-footer-bottom three">
					<div className="row">
						<div className="col-xl-6">
							<div className="aximo-copywright three">
								<p>&copy;Copyright 2024, All Rights Reserved by Mthemeus</p>
							</div>
						</div>
						<div className="col-xl-6">
							<div className="aximo-footer-menu2">
								<ul>
									<li>
										<Link href="/">Home</Link>
									</li>
									<li>
										<Link href="/about">About Us</Link>
									</li>
									<li>
										<Link href="/service">Services</Link>
									</li>
									<li>
										<Link href="/portfolio-one">Projects</Link>
									</li>
									<li>
										<Link href="/">Pages</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
