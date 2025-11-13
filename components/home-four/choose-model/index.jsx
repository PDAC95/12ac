function ChooseModel() {
	return (
		<div className="section aximo-section-padding">
			<div className="container">
				<div className="aximo-section-title center">
					<h2>Choose how you want to work with us</h2>
					<p>
						Whether you need a complete solution built from scratch, ongoing optimization of existing platforms, or dedicated team members, we have a model that fits your needs.
					</p>
				</div>

				<div className="row" style={{ marginTop: "50px" }}>
					{/* Model Cards */}
					<div className="col-lg-3 col-md-6">
						<div className="aximo-iconbox-wrap" style={{ height: "100%", marginBottom: "30px" }}>
							<div className="aximo-iconbox-data">
								<h3>Build & Grow</h3>
								<p>
									We build your solution from scratch and continue growing it every month. Start with a reduced upfront investment, then pay monthly as we add features, optimize performance, and scale with your business.
								</p>
								<p style={{ fontSize: "0.9em", marginTop: "10px", fontStyle: "italic" }}>
									Perfect for startups and growing businesses that need a complete solution without massive upfront costs.
								</p>
							</div>
						</div>
					</div>

					<div className="col-lg-3 col-md-6">
						<div className="aximo-iconbox-wrap" style={{ height: "100%", marginBottom: "30px" }}>
							<div className="aximo-iconbox-data">
								<h3>Project-Based</h3>
								<p>
									We build your complete solution from start to finish. Perfect for new products, features, or specific business needs.
								</p>
							</div>
						</div>
					</div>

					<div className="col-lg-3 col-md-6">
						<div className="aximo-iconbox-wrap" style={{ height: "100%", marginBottom: "30px" }}>
							<div className="aximo-iconbox-data">
								<h3>Monthly Retainer</h3>
								<p>
									Continuous development, maintenance, and optimization. We become your ongoing technology partner.
								</p>
							</div>
						</div>
					</div>

					<div className="col-lg-3 col-md-6">
						<div className="aximo-iconbox-wrap" style={{ height: "100%", marginBottom: "30px" }}>
							<div className="aximo-iconbox-data">
								<h3>Dedicated Team</h3>
								<p>
									Get skilled developers, designers, or specialists working exclusively on your projects as an extension of your team.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ChooseModel;
