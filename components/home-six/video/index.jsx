"use client";

import FadeInUp from "@/components/animation/FadeInUp";
import Image from "next/image";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import Shape2Img from "../../../public/images/v5/shape2.png";
import PlayBtnImg from "../../../public/images/v6/play-btn.png";
import VideoBg from "../../../public/images/v6/video-bg.png";
function Video() {
	const [isOpen, setOpen] = useState(false);

	return (
		<FadeInUp className="aximo-video-section2 extra-side-margin">
			<Image src={VideoBg} alt="video bg" />
			<ModalVideo
				channel="youtube"
				youtube={{ autoplay: 0 }}
				isOpen={isOpen}
				videoId="7e90gBu4pas"
				onClose={() => setOpen(false)}
			/>
			<button className="aximo-video-popup play-btn-size video-init" onClick={() => setOpen(true)}>
				<Image src={PlayBtnImg} alt="Play Btn" />
				<div className="waves waves6 wave-1"></div>
				<div className="waves waves6 wave-2"></div>
				<div className="waves waves6 wave-3"></div>
			</button>

			<div className="aximo-video-shape">
				<Image src={Shape2Img} alt="shape" />
			</div>
		</FadeInUp>
	);
}

export default Video;
