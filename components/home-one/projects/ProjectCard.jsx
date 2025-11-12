import Image from "next/image";
import Link from "next/link";
function ProjectCard({ project: { title, description, img, slug, category } }) {
	return (
		<div className="swiper-slide">
			<div className="aximo-project-thumb">
				<Image
					src={img}
					alt={title}
					sizes="100vw"
					style={{
						width: '100%',
						height: '400px',
						objectFit: 'cover'
					}}
				/>
				<div className="aximo-project-wrap">
					<div className="aximo-project-data">
						<Link href={`/service/${slug}`}>
							<h3>{title}</h3>
						</Link>
						<p>{description}</p>
					</div>
					<Link className="aximo-project-icon" href={`/service/${slug}`}>
						<svg width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M19.9795 2C19.9795 2 20.5 8 25.9795 11.2C28.4887 12.6653 31.9795 14 31.9795 14M31.9795 14H2M31.9795 14C31.9795 14 28.5339 15.415 25.9795 16.8C19.9795 20.0533 19.9795 26 19.9795 26"
								stroke="#FDFDE1"
								strokeWidth="3"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
