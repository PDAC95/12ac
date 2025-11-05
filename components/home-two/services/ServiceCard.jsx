import Link from "next/link";
function ServiceCard({ service: { title, description } }) {
	return (
		<div className="aximo-service-increase-row">
			<div className="aximo-service-increase-item">
				<div className="aximo-service-increase-title">
					<h3>{title}:</h3>
				</div>
				<div className="aximo-service-increase-body">
					<p>{description}</p>
				</div>
				<Link href="/single-service" className="aximo-service-increase-icon">
					<i className="icon-arrow-right"></i>
				</Link>
			</div>
		</div>
	);
}

export default ServiceCard;
