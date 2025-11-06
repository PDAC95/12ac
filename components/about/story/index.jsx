import Image from "next/image";
import Star2Img from "../../../public/images/v1/star2.png";
import StoryContent from "./StoryContent";
import StoryPhotos from "./StoryPhotos";
function Story() {
	return (
		<div className="section aximo-section-padding6">
			<div className="container">
				<div className="aximo-section-title center title-description">
					<h2>
						<span className="aximo-title-animation">
							We think our story is
							<span className="aximo-title-icon">
								<Image src={Star2Img} alt="star" />
							</span>
						</span>
						worth sharing with you
					</h2>
					<p>
						Founded in 2021, AC95 was born when a team of seasoned professionals—each with over 15 years of experience—came together with one goal: help businesses thrive through smart technology.
						Today, we have teams working across Canada, the United States, Mexico, Colombia, Panama, and Spain. We've delivered successful projects in all these countries, building solutions that work across borders and industries.
					</p>
				</div>

				<StoryPhotos />

				<div className="aximo-story-content">
					<StoryContent />
				</div>
			</div>
		</div>
	);
}

export default Story;
