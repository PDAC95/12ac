import FadeInStagger from "@/components/animation/FadeInStagger";
import Image from "next/image";
import Link from "next/link";
import Team5Img from "../../../public/images/team/team5.png";
import Team6Img from "../../../public/images/team/team6.png";
import Team7Img from "../../../public/images/team/team7.png";
import StarShapeHalfImg from "../../../public/images/v3/star-shape-half2.png";
import TeamCard from "./TeamCard";
const teamsData = [
	{
		id: crypto.randomUUID(),
		name: "Adrew Smith",
		designation: "Senior SEO Manager",
		img: Team5Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Jones Jack",
		designation: "Strategy Director",
		img: Team6Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Marsal Straw",
		designation: "SEO Content Writer",
		img: Team7Img,
	},
];
function Teams() {
	return (
		<div className="section aximo-section-padding3 position-relative">
			<div className="container">
				<div className="aximo-section-title familjen-grotesk">
					<div className="row">
						<div className="col-lg-6">
							<h2>Increase revenue with custom SEO</h2>
						</div>
						<div className="col-lg-6 d-flex align-items-center justify-content-end">
							<div className="aximo-title-btn">
								<Link className="aximo-default-btn pill yellow-btn" href="/team">
									<span className="aximo-label-up">Meet our team</span>
									<span className="aximo-label-up">Meet our team</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					{teamsData.map((team, index) => (
						<FadeInStagger index={index} className="col-xl-4 col-md-6" key={team.id}>
							<TeamCard team={team} />
						</FadeInStagger>
					))}
				</div>
			</div>
			<div className="aximo-star-shape-half ">
				<Image src={StarShapeHalfImg} alt="StarShapeHalfImg" sizes="100vw" />
			</div>
		</div>
	);
}

export default Teams;
