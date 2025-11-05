"use client";
import FadeInUp from "@/components/animation/FadeInUp";
import Image from "next/image";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import PlayImg from "../../../public/images/v2/play-btn.png";
import VideoBg from "../../../public/images/v2/video-bg.png";
function Video() {
	const [isOpen, setOpen] = useState(false);
	return (
		<FadeInUp className="aximo-video-section extra-side-margin">
			<Image src={VideoBg} alt="VideoBg" sizes="100vw" />
			<ModalVideo
				channel="youtube"
				youtube={{ autoplay: 0 }}
				isOpen={isOpen}
				videoId="7e90gBu4pas"
				onClose={() => setOpen(false)}
			/>

			<button className="aximo-video-popup play-btn-size video-init" onClick={() => setOpen(true)}>
				<Image src={PlayImg} alt="PlayImg" sizes="100vw" />
				<div className="waves wave-1"></div>
				<div className="waves wave-2"></div>
				<div className="waves wave-3"></div>
			</button>
		</FadeInUp>
	);
}

export default Video;
