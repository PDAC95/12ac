import Image from "next/image";
import Link from "next/link";
function TeamCard({ team: { name, designation, img } }) {
	return (
		<div className="aximo-team-wrap3">
			<div className="aximo-team-thumb3">
				<Image src={img} alt="author img" sizes="100vw" />
			</div>
			<div className="aximo-team-data3">
				<Link href="/single-team">
					<h3>{name}</h3>
				</Link>
				<p>{designation}</p>
			</div>
		</div>
	);
}

export default TeamCard;
