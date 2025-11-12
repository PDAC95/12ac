import FadeInStagger from "@/components/animation/FadeInStagger";
import Image from "next/image";
import Star2Img from "../../../public/images/v1/star2.png";
import ServiceCard from "./ServiceCard";

function Services({ services, filters, activeFilter, onFilterChange }) {
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
					<p>
						We deliver solutions that drive real growth—from AI automation to custom software and dedicated teams.
					</p>
				</div>

				{/* Filter Tabs */}
				{filters && (
					<div style={{
						display: "flex",
						justifyContent: "center",
						flexWrap: "wrap",
						gap: "15px",
						marginTop: "40px",
						marginBottom: "50px"
					}}>
						{filters.map((filter) => (
							<button
								key={filter.id}
								onClick={() => onFilterChange(filter.id)}
								style={{
									padding: "12px 30px",
									fontSize: "16px",
									fontWeight: "600",
									border: "2px solid var(--heading-color)",
									borderRadius: "8px",
									backgroundColor: activeFilter === filter.id ? "var(--accent-bg)" : "transparent",
									color: "var(--heading-color)",
									cursor: "pointer",
									transition: "all 0.3s ease",
									fontFamily: "var(--font-syne)",
								}}
								onMouseEnter={(e) => {
									if (activeFilter !== filter.id) {
										e.currentTarget.style.backgroundColor = "var(--accent-bg)";
									}
								}}
								onMouseLeave={(e) => {
									if (activeFilter !== filter.id) {
										e.currentTarget.style.backgroundColor = "transparent";
									}
								}}
							>
								{filter.label}
							</button>
						))}
					</div>
				)}

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
