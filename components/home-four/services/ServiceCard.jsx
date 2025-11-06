import Link from "next/link";
function ServiceCard({ service: { title, description, iconClass } }) {
	return (
		<div className="aximo-iconbox-wrap4 w-100 h-100 d-flex flex-column">
			<div className="aximo-iconbox-icon4">
				<i className={iconClass}></i>
			</div>
			<div className="aximo-iconbox-data4 flex-grow-1 d-flex flex-column">
				<h3>{title}</h3>
				<p className="flex-grow-1">{description}</p>
				<Link className="aximo-icon d-flex align-items-center gap-2" href="/single-service">
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M5 3L16 10L5 17V3Z"
							fill="#191931"
						/>
					</svg>
					<span style={{ fontSize: '0.95rem', fontWeight: '500', color: '#191931' }}>See how we do it</span>
				</Link>
			</div>
		</div>
	);
}

export default ServiceCard;
