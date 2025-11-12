import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "@/components/animation/FadeInStaggerTwo";
import Image from "next/image";

function StoryPhotos() {
	return (
		<FadeInStaggerTwo className="row">
			<FadeInStaggerTwoChildren className="col-lg-8">
				<div className="aximo-story-thumb">
					<Image
						src="/images/about/story1.png"
						alt="Story1Img"
						sizes="100vw"
						width={1000}
						height={600}
						style={{ width: '100%', height: 'auto' }}
					/>
				</div>
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren className="col-lg-4">
				<div className="aximo-story-thumb">
					<Image
						src="/images/about/story2.png"
						alt="StroryIMg 2"
						sizes="100vw"
						width={500}
						height={600}
						style={{ width: '100%', height: 'auto' }}
					/>
				</div>
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren className="col-lg-4">
				<div className="aximo-story-thumb">
					<Image
						src="/images/about/story3.png"
						alt="StoryImg 3"
						sizes="100vw"
						width={500}
						height={600}
						style={{ width: '100%', height: 'auto' }}
					/>
				</div>
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren className="col-lg-8">
				<div className="aximo-story-thumb">
					<Image
						src="/images/about/story4.png"
						alt="Story4Img"
						sizes="100vw"
						width={1000}
						height={600}
						style={{ width: '100%', height: 'auto' }}
					/>
				</div>
			</FadeInStaggerTwoChildren>
		</FadeInStaggerTwo>
	);
}

export default StoryPhotos;
