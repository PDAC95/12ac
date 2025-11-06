import Link from "next/link";
function Categories() {
	return (
		<div className="widget">
			<h3 className="wp-block-heading">Categories:</h3>
			<ul>
				<li>
					<Link href="/">AI & Technology</Link>
				</li>
				<li>
					<Link href="/">Mobile Development</Link>
				</li>
				<li>
					<Link href="/">Web Development</Link>
				</li>
				<li>
					<Link href="/">Digital Marketing</Link>
				</li>
				<li>
					<Link href="/">Development</Link>
				</li>
			</ul>
		</div>
	);
}

export default Categories;
