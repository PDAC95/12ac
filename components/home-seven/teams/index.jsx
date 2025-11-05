import FadeInStagger from "@/components/animation/FadeInStagger";
import Image from "next/image";
import Link from "next/link";
import Team1Img from "../../../public/images/team/team13.png";
import Team2Img from "../../../public/images/team/team14.png";
import Team3Img from "../../../public/images/team/team15.png";
import HeroShape from "../../../public/images/v7/hero-shape.png";
import TeamCard from "./TeamCard";

const teamsData = [
	{
		id: crypto.randomUUID(),
		name: "Adam Smith",
		designation: "Head of Digital Advertising",
		img: Team1Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Justine Mark",
		designation: "Commercial Director",
		img: Team2Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Robert Harz",
		designation: "Chief Data Officer",
		img: Team3Img,
	},
];
function Teams() {
	return (
		<div className="section aximo-section-padding3 position-relative">
			<div className="container">
				<div className="aximo-section-title bricolage-font position-relative z-index">
					<div className="row">
						<div className="col-lg-6">
							<h2>Talented people of our company</h2>
						</div>
						<div className="col-lg-6 d-flex align-items-center justify-content-end">
							<div className="aximo-title-btn">
								<Link className="aximo-default-btn blue-btn2" href="/team">
									<span className="aximo-label-up">Meet All Members</span>
									<span className="aximo-label-up">Meet All Members</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					{teamsData.map((team, index) => (
						<FadeInStagger key={team.id} className="col-xl-4 col-md-6" index={index}>
							<TeamCard team={team} />
						</FadeInStagger>
					))}
				</div>
			</div>
			<div className="aximo-team-shapev7">
				<Image src={HeroShape} alt="shape" />
			</div>
		</div>
	);
}

export default Teams;
