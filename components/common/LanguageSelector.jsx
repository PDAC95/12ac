"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

export default function LanguageSelector() {
	const { language, changeLanguage } = useLanguage();
	const [isOpen, setIsOpen] = useState(false);

	const languages = [
		{ code: 'en', label: 'EN', flag: '🇺🇸' },
		{ code: 'es', label: 'ES', flag: '🇪🇸' },
	];

	const currentLang = languages.find(lang => lang.code === language);

	return (
		<div style={{ position: 'relative' }}>
			<button
				onClick={() => setIsOpen(!isOpen)}
				style={{
					background: 'transparent',
					border: '2px solid #bff747',
					borderRadius: '8px',
					padding: '8px 16px',
					color: '#bff747',
					cursor: 'pointer',
					fontFamily: 'var(--font-inter)',
					fontSize: '14px',
					fontWeight: '700',
					display: 'flex',
					alignItems: 'center',
					gap: '8px',
					transition: 'all 0.3s ease',
				}}
				onMouseEnter={(e) => {
					e.currentTarget.style.background = '#bff747';
					e.currentTarget.style.color = '#000';
				}}
				onMouseLeave={(e) => {
					e.currentTarget.style.background = 'transparent';
					e.currentTarget.style.color = '#bff747';
				}}
			>
				<span>{currentLang?.flag}</span>
				<span>{currentLang?.label}</span>
			</button>

			{isOpen && (
				<div style={{
					position: 'absolute',
					top: '100%',
					right: 0,
					marginTop: '8px',
					background: '#0c0c0c',
					border: '2px solid #bff747',
					borderRadius: '8px',
					overflow: 'hidden',
					zIndex: 1000,
					minWidth: '120px',
				}}>
					{languages.map((lang) => (
						<button
							key={lang.code}
							onClick={() => {
								changeLanguage(lang.code);
								setIsOpen(false);
							}}
							style={{
								width: '100%',
								padding: '12px 16px',
								background: language === lang.code ? 'rgba(191, 247, 71, 0.1)' : 'transparent',
								border: 'none',
								color: '#fdfde1',
								cursor: 'pointer',
								fontFamily: 'var(--font-inter)',
								fontSize: '14px',
								fontWeight: '600',
								display: 'flex',
								alignItems: 'center',
								gap: '8px',
								transition: 'background 0.2s ease',
							}}
							onMouseEnter={(e) => {
								e.currentTarget.style.background = 'rgba(191, 247, 71, 0.2)';
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.background = language === lang.code ? 'rgba(191, 247, 71, 0.1)' : 'transparent';
							}}
						>
							<span>{lang.flag}</span>
							<span>{lang.label}</span>
						</button>
					))}
				</div>
			)}
		</div>
	);
}
