import Image from "next/image";
import Link from "next/link";
import Blog1Img from "../../public/images/blog/blog1.png";
import Blog2Img from "../../public/images/blog/blog2.png";
import Blog3Img from "../../public/images/blog/blog3.png";
const recentPostData = [
	{
		id: crypto.randomUUID(),
		title: "5 key benefits of custom software for growing businesses",
		date: "November 6, 2024",
		img: Blog1Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Best practices for React development in 2024",
		date: "November 1, 2024",
		img: Blog2Img,
	},
	{
		id: crypto.randomUUID(),
		title: "How to choose the right tech stack for your project",
		date: "October 25, 2024",
		img: Blog3Img,
	},
];
function RecentPosts() {
	return (
		<div className="widget aximo_recent_posts_Widget">
			<h3 className="wp-block-heading">Recent Posts:</h3>

			{recentPostData.map((post) => (
				<div className="post-item" key={post.id}>
					<div className="post-thumb">
						<Link href="/single-blog">
							<Image src={post.img} alt={post.title} sizes="100vw" />
						</Link>
					</div>
					<div className="post-text">
						<div className="post-date">{post.date}</div>
						<Link className="post-title" href="/single-blog">
							{post.title}
						</Link>
					</div>
				</div>
			))}
		</div>
	);
}

export default RecentPosts;
