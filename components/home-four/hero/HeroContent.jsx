"use client";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "@/components/animation/FadeInStaggerTwo";
import Image from "next/image";
import Link from "next/link";
import RoundShapeImg from "../../../public/images/v4/round-shape.png";
function HeroContent() {
	return (
		<>
			<style jsx>{`
				.hero-cta-btn {
					background-color: #bff747;
					color: #0c0c0c;
					transition: all 0.4s;
				}
				.hero-cta-btn:hover {
					background-color: #ff4612;
					color: #ffffff;
				}
			`}</style>
			<FadeInStaggerTwo className="aximo-hero-content4">
				<FadeInStaggerTwoChildren>
					<p>
						<span>Your trusted technology partner</span>
					</p>
				</FadeInStaggerTwoChildren>
				<FadeInStaggerTwoChildren>
					<h1 style={{ fontSize: '3.5rem' }}>
						We turn ideas into
						<span className="aximo-hero-shape-title">
							working solutions
							<span className="aximo-hero-round-shape">
								<Image src={RoundShapeImg} alt="RoundShapeImg" sizes="100vw" />
							</span>
						</span>
					</h1>
				</FadeInStaggerTwoChildren>
				<FadeInStaggerTwoChildren>
					<p>
						From custom software to AI automation, we help businesses grow with technology that actually works. Our team brings 15+ years of expertise and a straightforward approach to solving your challenges.
					</p>
				</FadeInStaggerTwoChildren>
				<FadeInStaggerTwoChildren className="aximo-hero-btn-wrap">
					<Link className="aximo-default-btn pill hero-cta-btn" href="/contact-us">
						Start a project
					</Link>
					<Link className="aximo-default-btn aximo-default-btn-outline pill outline-white" href="/service">
						<span className="aximo-label-up">View our services</span>
						<span className="aximo-label-up">View our services</span>
					</Link>
				</FadeInStaggerTwoChildren>
			</FadeInStaggerTwo>
		</>
	);
}

export default HeroContent;
