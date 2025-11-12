"use client";
import { useState } from "react";

function HeaderLanguageSelector() {
	const [currentLang, setCurrentLang] = useState("EN");

	const toggleLanguage = () => {
		setCurrentLang(currentLang === "EN" ? "ES" : "EN");
		// Future: Add language switching logic here
	};

	return (
		<div style={{
			display: "flex",
			alignItems: "center",
			marginRight: "20px",
		}}>
			<button
				onClick={toggleLanguage}
				style={{
					display: "flex",
					alignItems: "center",
					gap: "8px",
					padding: "8px 16px",
					background: "rgba(191, 247, 71, 0.1)",
					border: "2px solid rgba(191, 247, 71, 0.4)",
					borderRadius: "25px",
					color: "#fdfde1",
					fontSize: "14px",
					fontWeight: "600",
					fontFamily: "var(--font-inter)",
					cursor: "pointer",
					transition: "all 0.3s ease",
				}}
				onMouseEnter={(e) => {
					e.currentTarget.style.background = "var(--accent-bg)";
					e.currentTarget.style.borderColor = "var(--accent-bg)";
					e.currentTarget.style.color = "#000";
				}}
				onMouseLeave={(e) => {
					e.currentTarget.style.background = "rgba(191, 247, 71, 0.1)";
					e.currentTarget.style.borderColor = "rgba(191, 247, 71, 0.4)";
					e.currentTarget.style.color = "#fdfde1";
				}}
			>
				<svg
					width="18"
					height="18"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<circle cx="12" cy="12" r="10"/>
					<line x1="2" y1="12" x2="22" y2="12"/>
					<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
				</svg>
				<span>{currentLang}</span>
				<svg
					width="14"
					height="14"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<polyline points="6 9 12 15 18 9"/>
				</svg>
			</button>
		</div>
	);
}

export default HeaderLanguageSelector;
