import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "@/components/animation/FadeInStaggerTwo";

function NumberBox() {
	return (
		<div className="aximo-numberbox-section">
			<div className="container">
				<FadeInStaggerTwo className="row">
					<FadeInStaggerTwoChildren className="col-xl-4 col-lg-6">
						<div className="aximo-numberbox-wrap">
							<div className="aximo-numberbox-number">1</div>
							<div className="aximo-numberbox-data">
								<p>
									<span>Discovery & Planning</span>
								</p>
								<p>Reach out and we&apos;ll listen carefully to understand your goals, challenges, and what success looks like for your business.</p>
							</div>
						</div>
					</FadeInStaggerTwoChildren>
					<FadeInStaggerTwoChildren className="col-xl-4 col-lg-6">
						<div className="aximo-numberbox-wrap">
							<div className="aximo-numberbox-number">2</div>
							<div className="aximo-numberbox-data">
								<p>
									<span>Building Together</span>
								</p>
								<p>We become your partners in progress, collaborating closely through design, development, and regular check-ins.</p>
							</div>
						</div>
					</FadeInStaggerTwoChildren>
					<FadeInStaggerTwoChildren className="col-xl-4 col-lg-6">
						<div className="aximo-numberbox-wrap">
							<div className="aximo-numberbox-number">3</div>
							<div className="aximo-numberbox-data">
								<p>
									<span>Launch & Growth</span>
								</p>
								<p>We continuously monitor performance and optimize to ensure your solution delivers the results you need.</p>
							</div>
						</div>
					</FadeInStaggerTwoChildren>
				</FadeInStaggerTwo>
			</div>
		</div>
	);
}

export default NumberBox;
