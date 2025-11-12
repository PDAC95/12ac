"use client";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import ArrowRightImg from "../../../public/images/icon/arrow-right.svg";
import PlayBtnImg from "../../../public/images/icon/play-circle.svg";

function ServiceCard({ service: { title, description, icon, slug, category } }) {
	const [isVideoOpen, setIsVideoOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		return () => setMounted(false);
	}, []);

	// Map service slug to video URL
	const getVideoUrl = (slug) => {
		const videoMap = {
			"custom-software-apps": "https://res.cloudinary.com/dxri4npkx/video/upload/v1762808455/acden_kwlmqw.mp4",
			"ai-solutions-automation": "https://res.cloudinary.com/dxri4npkx/video/upload/v1762808446/acaien_cwicj2.mp4",
			"digital-marketing-branding": "https://res.cloudinary.com/dxri4npkx/video/upload/v1762808458/acmen_ahqbuw.mp4",
			"dedicated-teams": "https://res.cloudinary.com/dxri4npkx/video/upload/v1762809956/acteen_sjph3x.mp4"
		};
		return videoMap[slug] || "https://res.cloudinary.com/dxri4npkx/video/upload/v1762807998/ac1en_fs9jnb.mp4";
	};

	const openVideo = () => {
		setIsVideoOpen(true);
		setIsLoading(true);
	};

	const closeVideo = () => {
		setIsVideoOpen(false);
		setIsLoading(true);
	};

	const handleVideoLoad = () => {
		setIsLoading(false);
	};

	const videoModal = isVideoOpen && mounted ? (
		<div
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				backgroundColor: "rgba(0, 0, 0, 0.95)",
				zIndex: 99999,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				padding: "20px",
			}}
			onClick={closeVideo}
		>
			{/* Close button */}
			<button
				onClick={closeVideo}
				style={{
					position: "absolute",
					top: "20px",
					right: "20px",
					background: "#bff747",
					border: "none",
					borderRadius: "50%",
					width: "50px",
					height: "50px",
					cursor: "pointer",
					fontSize: "24px",
					fontWeight: "bold",
					color: "#000",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					transition: "all 0.3s ease",
					zIndex: 100000,
				}}
				onMouseEnter={(e) => {
					e.currentTarget.style.transform = "scale(1.1)";
					e.currentTarget.style.backgroundColor = "#d4ff6b";
				}}
				onMouseLeave={(e) => {
					e.currentTarget.style.transform = "scale(1)";
					e.currentTarget.style.backgroundColor = "#bff747";
				}}
			>
				×
			</button>

			{/* Video container */}
			<div
				onClick={(e) => e.stopPropagation()}
				style={{
					width: "100%",
					maxWidth: "1200px",
					aspectRatio: "16/9",
					position: "relative",
					background: "#000",
					borderRadius: "12px",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				{/* Loading spinner */}
				{isLoading && (
					<div style={{
						position: "absolute",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						gap: "20px",
						zIndex: 1,
					}}>
						<div style={{
							width: "60px",
							height: "60px",
							border: "4px solid rgba(191, 247, 71, 0.3)",
							borderTop: "4px solid #bff747",
							borderRadius: "50%",
							animation: "spin 1s linear infinite",
						}}></div>
						<p style={{
							color: "#bff747",
							fontFamily: "var(--font-inter)",
							fontSize: "16px",
							fontWeight: "500",
						}}>
							Loading video...
						</p>
					</div>
				)}

				<style jsx>{`
					@keyframes spin {
						0% { transform: rotate(0deg); }
						100% { transform: rotate(360deg); }
					}
				`}</style>

				<video
					width="100%"
					height="100%"
					src={getVideoUrl(slug)}
					controls
					autoPlay
					playsInline
					onLoadedData={handleVideoLoad}
					style={{
						borderRadius: "12px",
						border: "3px solid #bff747",
						opacity: isLoading ? 0 : 1,
						transition: "opacity 0.3s ease",
						objectFit: "contain",
					}}
				/>
			</div>
		</div>
	) : null;

	return (
		<>
			<div className="aximo-iconbox-wrap" style={{ position: "relative" }}>
				<div className="aximo-iconbox-icon">
					<i className={`${icon}`}></i>
				</div>
				<div className="aximo-iconbox-data">
					<h3>{title}</h3>
					<p>{description}</p>
					<Link href={category ? `/service?filter=${category}` : `/service/${slug}`} className="aximo-icon">
						<Image src={ArrowRightImg} alt="arrow right" />
					</Link>
				</div>

				{/* Play Button - Bottom Right Corner */}
				<div
					onClick={openVideo}
					style={{
						position: "absolute",
						bottom: "20px",
						right: "20px",
						cursor: "pointer",
						zIndex: 10,
						transition: "transform 0.3s ease",
					}}
					onMouseEnter={(e) => {
						e.currentTarget.style.transform = "scale(1.15)";
					}}
					onMouseLeave={(e) => {
						e.currentTarget.style.transform = "scale(1)";
					}}
				>
					<Image src={PlayBtnImg} alt="Play video" width={40} height={40} />
				</div>
			</div>

			{/* Video Modal rendered via Portal */}
			{mounted && videoModal && createPortal(videoModal, document.body)}
		</>
	);
}

export default ServiceCard;
