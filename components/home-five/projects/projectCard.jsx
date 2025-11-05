import Image from "next/image";
import Link from "next/link";
function ProjectCard({ project: { title, img, company, category } }) {
	return (
		<div className="aximo-project-wrap4">
			<div className="aximo-project-thumb4">
				<Image src={img} alt="project" sizes="100vw" />
				<Link className="aximo-project-view" href="single-portfolio">
					View
				</Link>
			</div>
			<div className="aximo-project-data4">
				<Link href="/single-portfolio">
					<h3>{title}</h3>
				</Link>
				<div className="aximo-project-meta">
					<ul>
						<li>
							<a href="#">{company}</a>
						</li>
						<li>
							<a href="#">{category}</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
