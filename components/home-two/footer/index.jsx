import Image from "next/image";
import Link from "next/link";
import LogoDarkImg from "../../../public/images/logo/logo-dark.svg";
import FooterBg from "../../../public/images/v2/footer-bg.png";
import FooterBottom from "./FooterBottom";
function Footer() {
	return (
		<footer className="aximo-footer-section2" style={{ backgroundImage: `url(${FooterBg})` }}>
			<div className="container">
				<div className="aximo-footer-top aximo-section-padding">
					<div className="row">
						<div className="col-xl-4 col-lg-12">
							<div className="aximo-footer-textarea">
								<Link href="/">
									<Image src={LogoDarkImg} alt="logo" />
								</Link>
								<p>
									We are a branding agency that digitally works to help companies grow. We have a
									successful track record of working with various organizations.
								</p>
							</div>
						</div>
						<div className="col-xl-3 col-md-4">
							<div className="aximo-footer-menu extar-margin">
								<div className="aximo-footer-title">
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
						<div className="col-xl-2 col-md-4">
							<div className="aximo-footer-menu">
								<div className="aximo-footer-title">
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
							<div className="aximo-subscription">
								<div className="aximo-footer-title">
									<p>Subscribe Links</p>
								</div>
								<form action="#">
									<input type="email" placeholder="Email Address" />
									<button id="aximo-subscription-btn" type="submit">
										<span className="aximo-label-up">Subscribe</span>
										<span className="aximo-label-up">Subscribe</span>
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
				<div className="aximo-footer-bottom two">
					<div className="row">
						<FooterBottom />
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
