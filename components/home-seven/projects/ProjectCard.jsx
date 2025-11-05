import Link from "next/link";
function ProjectCard({ project: { title, description } }) {
	return (
		<div className="aximo-image-resizing-content">
			<Link href="/single-portfolio">
				<h4>#{title}</h4>
			</Link>
			<p>{description}</p>
		</div>
	);
}

export default ProjectCard;
