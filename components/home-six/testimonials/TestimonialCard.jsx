import Image from "next/image";
import RatingImg from "../../../public/images/v6/rating.png";
function TestimonialCard({ testimonial: { title, text, rating, author } }) {
	return (
		<div className="aximo-testimonial-wrap5">
			<div className="aximo-testimonial-data5">
				<ul>
					{[...Array(rating)].map(() => (
						<li key={crypto.randomUUID()}>
							<Image src={RatingImg} alt="rating" />
						</li>
					))}
				</ul>
				<h3>{title}</h3>
				<p>{`“${text}”`}</p>
				<h6>
					{author.name} <span>{author.designation}</span>
				</h6>
			</div>
		</div>
	);
}

export default TestimonialCard;
