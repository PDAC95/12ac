import Categories from "./Categories";
import RecentPosts from "./RecentPosts";
import Search from "./Search";
import Tags from "./Tags";

import Blog1Img from "../../public/images/blog/blog3.png";
import Blog2Img from "../../public/images/blog/blog4.png";
import Blog3Img from "../../public/images/blog/blog5.png";
import FadeInStagger from "../animation/FadeInStagger";
import BlogCard from "./BlogCard";
import Navigation from "./Navigation";

const blogData = [
	{
		id: crypto.randomUUID(),
		title: "How AI is transforming custom software development in 2024",
		content:
			"Artificial intelligence is no longer just a buzzword—it's reshaping how we build software. From intelligent code assistants to automated testing, discover how AI tools are helping development teams deliver better products faster",
		category: "AI & Technology",
		date: "November 5, 2024",
		img: Blog1Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Mobile-first development: Why your next app should start with mobile",
		content:
			"With mobile devices accounting for over 60% of web traffic, mobile-first isn't optional—it's essential. Learn the key principles and best practices for building apps that users love on any device",
		category: "Mobile Development",
		date: "November 3, 2024",
		img: Blog2Img,
	},
	{
		id: crypto.randomUUID(),
		title: "From idea to deployment: Our proven process for delivering software projects",
		content:
			"Building custom software is complex, but it doesn't have to be chaotic. We break down our three-phase approach—Discovery, Development, and Deployment—that ensures projects stay on track and deliver real value",
		category: "Development",
		date: "October 28, 2024",
		img: Blog3Img,
	},
];
function Blog() {
	return (
		<div className="section aximo-section-padding2">
			<div className="container">
				<div className="row">
					<div className="col-lg-8">
						{blogData.map((blog, index) => (
							<FadeInStagger className="single-post-item" key={blog.id} index={index}>
								<BlogCard key={blog.id} blog={blog} />
							</FadeInStagger>
						))}
						<Navigation />
					</div>
					<div className="col-lg-4">
						<div className="right-sidebar">
							<Search />
							<Categories />
							<RecentPosts />
							<Tags />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Blog;
