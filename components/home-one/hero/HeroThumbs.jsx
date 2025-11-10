"use client";
import { useState } from "react";
import FadeInRight from "@/components/animation/FadeInRight";
import Image from "next/image";
import HeroThumbImg from "../../../public/images/v1/hero-thumb.png";
import PlayBtnImg from "../../../public/images/icon/play-circle.svg";

function HeroThumbs() {
	const [isVideoOpen, setIsVideoOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	const openVideo = () => {
		setIsVideoOpen(true);
		setIsLoading(true);
	};

	const closeVideo = () => {
		setIsVideoOpen(false);
		setIsLoading(true);
	};

	const handleIframeLoad = () => {
		setIsLoading(false);
	};

	return (
		<>
			<FadeInRight className="aximo-hero-thumb" style={{ position: "relative" }}>
				<Image src={HeroThumbImg} alt="Hero thumb" sizes="100vw" priority />
				<div
					onClick={openVideo}
					style={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						cursor: "pointer",
						zIndex: 10,
						transition: "transform 0.3s ease",
					}}
					onMouseEnter={(e) => {
						e.currentTarget.style.transform = "translate(-50%, -50%) scale(1.1)";
					}}
					onMouseLeave={(e) => {
						e.currentTarget.style.transform = "translate(-50%, -50%) scale(1)";
					}}
				>
					<Image src={PlayBtnImg} alt="Play video" width={80} height={80} />
				</div>
			</FadeInRight>

			{/* Video Modal */}
			{isVideoOpen && (
				<div
					style={{
						position: "fixed",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						backgroundColor: "rgba(0, 0, 0, 0.95)",
						zIndex: 9999,
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
							zIndex: 10000,
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
							src="https://res.cloudinary.com/dxri4npkx/video/upload/v1762807998/ac1en_fs9jnb.mp4"
							controls
							autoPlay
							playsInline
							onLoadedData={handleIframeLoad}
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
			)}
		</>
	);
}

export default HeroThumbs;
