import Link from "next/link";
function HeaderButton() {
	return (
		<div className="header-btn header-btn-l1">
			<Link className="aximo-default-btn pill aximo-header-btn" href="/login">
				Login
			</Link>
		</div>
	);
}

export default HeaderButton;
