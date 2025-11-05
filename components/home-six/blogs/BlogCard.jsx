import Image from "next/image";
import Link from "next/link";
import NextImg from "../../../public/images/v6/next.svg";
function BlogCard({ blog: { title, content, category, date, img } }) {
	return (
		<div className="col-lg-6">
			<div className="aximo-blog-wrap2">
				<div className="aximo-blog-thumb2">
					<Link href="/single-blog">
						<Image src={img} alt={title} sizes="100vw" />
					</Link>
				</div>
				<div className="aximo-blog-content2">
					<div className="aximo-blog-meta2">
						<ul>
							<li>{category}</li>
							<li>{date}</li>
						</ul>
					</div>
					<Link href="/single-blog">
						<h3>{title}</h3>
					</Link>
					<p>{content}</p>
					<Link className="aximo-blog-btn" href="/single-blog">
						<Image src={NextImg} alt="next" />
					</Link>
				</div>
			</div>
		</div>
	);
}

export default BlogCard;
