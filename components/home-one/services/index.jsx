"use client";
import FadeInStagger from "@/components/animation/FadeInStagger";
import Image from "next/image";
import Link from "next/link";
import Star2Img from "../../../public/images/v1/star2.png";
import ServiceCard from "./ServiceCard";

function Services({ services, filters, activeFilter, onFilterChange }) {
	return (
		<div id="services" className="section aximo-section-padding4">
			<div className="container">
				<div className="aximo-section-title center">
					<h2>
						Everything your business needs
						<br />
						<span className="aximo-title-animation">
							to grow digitally
							<span className="aximo-title-icon">
								<Image src={Star2Img} alt="Star2Img" />
							</span>
						</span>
					</h2>
					<p>
						One platform, multiple solutions. From building your technology to scaling your team, we cover every aspect of your digital journey through flexible monthly plans.
					</p>
				</div>

				{/* Choose Your Plan CTA */}
				<div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "30px" }}>
					<Link
						href="/pricing"
						style={{
							padding: "12px 30px",
							fontSize: "16px",
							fontWeight: "600",
							border: "2px solid var(--accent-bg)",
							borderRadius: "8px",
							backgroundColor: "var(--accent-bg)",
							color: "#000",
							textDecoration: "none",
							transition: "all 0.3s ease",
							fontFamily: "var(--font-syne)",
							display: "inline-block",
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.backgroundColor = "transparent";
							e.currentTarget.style.color = "var(--accent-bg)";
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.backgroundColor = "var(--accent-bg)";
							e.currentTarget.style.color = "#000";
						}}
					>
						Choose your plan →
					</Link>
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
