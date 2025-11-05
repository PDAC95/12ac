import Image from "next/image";
import Link from "next/link";
import NextWhiteImg from "../../../public/images/v6/next-white.svg";
function ProjectCard({ project: { title, img } }) {
	return (
		<div className="aximo-project-thumb5">
			<Image src={img} alt="project img" sizes="100vw" />
			<div className="aximo-marquee-two">
				<div className="aximo-infinite two">
					{[...Array(18)].map(() => (
						<Link key={crypto.randomUUID()} href="/single-portfolio">
							{title} <Image src={NextWhiteImg} alt="Next" />
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
