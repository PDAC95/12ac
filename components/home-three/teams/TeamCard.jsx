import Image from "next/image";
import Link from "next/link";
function TeamCard({ team: { name, designation, img } }) {
	return (
		<div className="aximo-team-wrap2">
			<div className="aximo-team-thumb2">
				<Image src={img} alt={name} sizes="100vw" />
			</div>
			<div className="aximo-team-data2">
				<Link href="/single-team">
					<h4>{name}</h4>
				</Link>
				<p>{designation}</p>
			</div>
		</div>
	);
}

export default TeamCard;
