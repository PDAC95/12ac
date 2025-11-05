"use client";
import CountUp from "react-countup";
function AboutCounter() {
	return (
		<div className="aximo-counter-wrap">
			<div className="aximo-counter-data">
				<h2 className="aximo-counter-number">
					<span className="aximo-counter">
						<CountUp end={15} duration={3} redraw={true} enableScrollSpy />
					</span>
					+
				</h2>
				<p>Years of expertise</p>
			</div>
			<div className="aximo-counter-data">
				<h2 className="aximo-counter-number">
					<span className="aximo-counter">
						<CountUp end={6} duration={3} redraw={true} enableScrollSpy />
					</span>
				</h2>
				<p>Countries with active projects</p>
			</div>
			<div className="aximo-counter-data">
				<h2 className="aximo-counter-number">
					<span className="aximo-counter">
						<CountUp end={100} duration={3} redraw={true} enableScrollSpy />
					</span>
					%
				</h2>
				<p>Commitment to your success</p>
			</div>
		</div>
	);
}

export default AboutCounter;
