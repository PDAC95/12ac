import Image from "next/image";
import Link from "next/link";
import LikeImg from "../../../public/images/v2/like.svg";
function PricingCard({ pricing: { plan, price, img, services, active } }) {
	return (
		<div className="aximo-pricing-wrap">
			<div className="aximo-pricing-header">
				<Image src={img} alt={plan} sizes="100vw" />
				<h3>{plan}</h3>
			</div>
			<div className="aximo-pricing-price">
				<h2>${price}</h2>
			</div>
			<div className="aximo-pricing-body">
				<ul>
					{services.map((service) => (
						<li key={service}>
							<Image src={LikeImg} alt="like" sizes="100vw" />
							{service}
						</li>
					))}
				</ul>
			</div>
			<Link className={`aximo-default-btn aximo-pricing-btn ${active && "active"}`} href="/pricing">
				Purchase It Now
			</Link>
		</div>
	);
}

export default PricingCard;
