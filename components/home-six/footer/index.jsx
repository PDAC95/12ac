import Image from "next/image";
import Link from "next/link";
import LogoWhiteImg from "../../../public/images/logo/logo-white.svg";
import ShapeImg from "../../../public/images/v6/shapes.png";
import FooterContact from "./FooterContact";
import FooterCopyright from "./FooterCopyright";
import FooterSocial from "./FooterSocial";
function Footer() {
	return (
		<footer className="section dark-bg2 position-relative">
			<div className="container">
				<div className="aximo-footer-extra-top">
					<FooterContact />
				</div>
				<div className="aximo-footer-top6">
					<div className="row">
						<div className="col-xl-4 col-lg-12">
							<div className="aximo-footer-textarea light-two">
								<Link href="/">
									<Image src={LogoWhiteImg} alt="logo" sizes="100vw" />
								</Link>
								<p>
									We are a branding agency that digitally works to help companies grow. We have a
									successful track record of working with various organizations.
								</p>
								<FooterCopyright />
							</div>
						</div>
						<div className="col-xl-3 col-md-4">
							<div className="aximo-footer-menu extar-margin light-two">
								<div className="aximo-footer-title light-two">
									<p>Special Links</p>
								</div>
								<ul>
									<li>
										<Link href="/about">About us</Link>
									</li>
									<li>
										<Link href="/service">Our services</Link>
									</li>
									<li>
										<Link href="/portfolio-one">Portfolio</Link>
									</li>
									<li>
										<Link href="/blog">Blogs</Link>
									</li>
									<li>
										<Link href="/">Premium member</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-3 col-md-4">
							<div className="aximo-footer-menu light-two">
								<div className="aximo-footer-title light-two">
									<p>Utility pages</p>
								</div>
								<ul>
									<li>
										<Link href="/about">About us</Link>
									</li>
									<li>
										<Link href="/service">Our services</Link>
									</li>
									<li>
										<Link href="/portfolio-one">Portfolio</Link>
									</li>
									<li>
										<Link href="/blog">Blogs</Link>
									</li>
									<li>
										<Link href="/">Premium member</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-2 col-md-4">
							<FooterSocial />
						</div>
					</div>
				</div>
			</div>
			<div className="aximo-footer-shapev6">
				<Image src={ShapeImg} alt="shape" />
			</div>
		</footer>
	);
}

export default Footer;
