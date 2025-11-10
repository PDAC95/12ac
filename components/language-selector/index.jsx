"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "../../public/images/logo/logo-white.svg";

function LanguageSelector() {
	const [hoveredCard, setHoveredCard] = useState(null);

	return (
		<div
			style={{
				minHeight: '100vh',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				position: 'relative',
				overflow: 'hidden',
				background: '#000',
			}}
		>
			{/* Geometric shapes background */}
			<div style={{
				position: 'absolute',
				inset: 0,
				zIndex: 0,
			}}>
				{/* Large circle - left */}
				<div style={{
					position: 'absolute',
					left: '-15%',
					top: '20%',
					width: '600px',
					height: '600px',
					borderRadius: '50%',
					border: '1px solid rgba(191, 247, 71, 0.1)',
					opacity: 0.5,
				}} />

				{/* Large circle - right */}
				<div style={{
					position: 'absolute',
					right: '-15%',
					bottom: '20%',
					width: '600px',
					height: '600px',
					borderRadius: '50%',
					border: '1px solid rgba(191, 247, 71, 0.1)',
					opacity: 0.5,
				}} />

				{/* Diagonal lines */}
				<div style={{
					position: 'absolute',
					top: 0,
					left: '30%',
					width: '1px',
					height: '100%',
					background: 'linear-gradient(to bottom, transparent, rgba(191, 247, 71, 0.1), transparent)',
				}} />
				<div style={{
					position: 'absolute',
					top: 0,
					right: '30%',
					width: '1px',
					height: '100%',
					background: 'linear-gradient(to bottom, transparent, rgba(191, 247, 71, 0.1), transparent)',
				}} />
			</div>

			<style jsx>{`
				@keyframes fadeIn {
					from {
						opacity: 0;
						transform: translateY(20px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}

				.logo-container {
					animation: fadeIn 0.6s ease-out;
				}

				.title-container {
					animation: fadeIn 0.8s ease-out 0.1s backwards;
				}

				.cards-container {
					animation: fadeIn 1s ease-out 0.2s backwards;
				}

				/* Responsive typography matching home */
				@media (max-width: 1400px) {
					.main-title {
						font-size: 70px !important;
					}
				}

				@media (max-width: 1199px) {
					h2 {
						font-size: 48px !important;
					}
				}

				@media (max-width: 1024px) {
					.cards-container {
						flex-direction: column !important;
						padding: 0 20px !important;
					}
				}

				@media (max-width: 767px) {
					.main-title {
						font-size: 48px !important;
					}
					.subtitle {
						font-size: 18px !important;
						line-height: 28px !important;
					}
					h2 {
						font-size: 36px !important;
						font-weight: 600 !important;
						letter-spacing: -0.64px !important;
					}
				}
			`}</style>

			<div style={{
				position: 'relative',
				zIndex: 2,
				width: '100%',
				maxWidth: '1400px',
				padding: '60px 40px',
			}}>
				{/* Logo */}
				<div className="logo-container" style={{
					textAlign: 'center',
					marginBottom: '60px',
				}}>
					<Image
						src={Logo}
						alt="AC95 Logo"
						width={300}
						height={75}
						priority
						style={{
							filter: 'drop-shadow(0 0 20px rgba(191, 247, 71, 0.3))',
						}}
					/>
				</div>

				{/* Title */}
				<div className="title-container" style={{
					textAlign: 'center',
					marginBottom: '80px',
				}}>
					<h1 className="main-title" style={{
						fontFamily: 'var(--font-syne)',
						fontSize: '104px',
						fontWeight: '700',
						color: '#fdfde1',
						marginBottom: '20px',
						letterSpacing: '-1px',
						lineHeight: '1em',
					}}>
						Welcome to{' '}
						<span style={{
							color: '#bff747',
						}}>
							AC95
						</span>
					</h1>
					<p className="subtitle" style={{
						fontFamily: 'var(--font-inter)',
						fontSize: '20px',
						color: 'rgba(253, 253, 225, 0.6)',
						maxWidth: '650px',
						margin: '0 auto',
						lineHeight: '32px',
						fontWeight: '400',
					}}>
						Choose your language to get started
					</p>
				</div>

				{/* Language Cards - Side by side */}
				<div className="cards-container" style={{
					display: 'flex',
					gap: '40px',
					justifyContent: 'center',
					maxWidth: '1000px',
					margin: '0 auto',
				}}>
					{/* English Card */}
					<Link
						href="/home"
						style={{ textDecoration: 'none', flex: 1, maxWidth: '460px' }}
						onMouseEnter={() => setHoveredCard('en')}
						onMouseLeave={() => setHoveredCard(null)}
					>
						<div style={{
							position: 'relative',
							padding: '60px 40px',
							borderRadius: '20px',
							cursor: 'pointer',
							border: '2px solid',
							borderColor: hoveredCard === 'en' ? '#bff747' : 'rgba(191, 247, 71, 0.25)',
							background: 'rgba(12, 12, 12, 0.8)',
							transition: 'all 0.3s ease',
							transform: hoveredCard === 'en' ? 'translateY(-4px)' : 'translateY(0)',
						}}>
							{/* Decorative corner */}
							<div style={{
								position: 'absolute',
								top: '20px',
								right: '20px',
								width: '50px',
								height: '50px',
								border: '2px solid #bff747',
								borderBottom: 'none',
								borderLeft: 'none',
								opacity: hoveredCard === 'en' ? 1 : 0.4,
								transition: 'opacity 0.3s ease',
							}} />

							{/* Language Badge */}
							<div style={{
								width: '100px',
								height: '100px',
								margin: '0 auto 30px',
								borderRadius: '50%',
								border: '3px solid #bff747',
								background: 'rgba(191, 247, 71, 0.08)',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								transition: 'all 0.3s ease',
								transform: hoveredCard === 'en' ? 'scale(1.05)' : 'scale(1)',
							}}>
								<span style={{
									fontFamily: 'var(--font-syne)',
									fontSize: '2.2rem',
									fontWeight: '900',
									color: '#bff747',
									letterSpacing: '-2px',
								}}>
									EN
								</span>
							</div>

							{/* Language Name */}
							<h2 style={{
								fontFamily: 'var(--font-syne)',
								fontSize: '70px',
								fontWeight: '700',
								color: '#fdfde1',
								marginBottom: '25px',
								letterSpacing: '-0.7px',
								textAlign: 'center',
								lineHeight: '1.07em',
							}}>
								English
							</h2>

							{/* Divider */}
							<div style={{
								width: '80px',
								height: '4px',
								background: '#bff747',
								margin: '0 auto 35px',
								opacity: hoveredCard === 'en' ? 1 : 0.6,
								transition: 'all 0.3s ease',
								transform: hoveredCard === 'en' ? 'scaleX(1.3)' : 'scaleX(1)',
								borderRadius: '2px',
							}} />

							{/* Description */}
							<p style={{
								fontFamily: 'var(--font-inter)',
								fontSize: '18px',
								color: 'rgba(253, 253, 225, 0.7)',
								fontWeight: '400',
								lineHeight: '28px',
								marginBottom: '40px',
								textAlign: 'center',
							}}>
								Explore innovative technology solutions
							</p>

							{/* CTA Button */}
							<div style={{
								display: 'flex',
								justifyContent: 'center',
							}}>
								<div style={{
									display: 'inline-flex',
									alignItems: 'center',
									gap: '10px',
									padding: '16px 40px',
									background: '#bff747',
									color: '#000',
									fontSize: '16px',
									fontWeight: '700',
									borderRadius: '8px',
									fontFamily: 'var(--font-inter)',
									border: '2px solid #bff747',
								}}>
									Continue
									<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
										<path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
									</svg>
								</div>
							</div>
						</div>
					</Link>

					{/* Spanish Card */}
					<Link
						href="/es/home"
						style={{ textDecoration: 'none', flex: 1, maxWidth: '460px' }}
						onMouseEnter={() => setHoveredCard('es')}
						onMouseLeave={() => setHoveredCard(null)}
					>
						<div style={{
							position: 'relative',
							padding: '60px 40px',
							borderRadius: '20px',
							cursor: 'pointer',
							border: '2px solid',
							borderColor: hoveredCard === 'es' ? '#bff747' : 'rgba(191, 247, 71, 0.25)',
							background: 'rgba(12, 12, 12, 0.8)',
							transition: 'all 0.3s ease',
							transform: hoveredCard === 'es' ? 'translateY(-4px)' : 'translateY(0)',
						}}>
							{/* Decorative corner */}
							<div style={{
								position: 'absolute',
								top: '20px',
								right: '20px',
								width: '50px',
								height: '50px',
								border: '2px solid #bff747',
								borderBottom: 'none',
								borderLeft: 'none',
								opacity: hoveredCard === 'es' ? 1 : 0.4,
								transition: 'opacity 0.3s ease',
							}} />

							{/* Language Badge */}
							<div style={{
								width: '100px',
								height: '100px',
								margin: '0 auto 30px',
								borderRadius: '50%',
								border: '3px solid #bff747',
								background: 'rgba(191, 247, 71, 0.08)',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								transition: 'all 0.3s ease',
								transform: hoveredCard === 'es' ? 'scale(1.05)' : 'scale(1)',
							}}>
								<span style={{
									fontFamily: 'var(--font-syne)',
									fontSize: '2.2rem',
									fontWeight: '900',
									color: '#bff747',
									letterSpacing: '-2px',
								}}>
									ES
								</span>
							</div>

							{/* Language Name */}
							<h2 style={{
								fontFamily: 'var(--font-syne)',
								fontSize: '70px',
								fontWeight: '700',
								color: '#fdfde1',
								marginBottom: '25px',
								letterSpacing: '-0.7px',
								textAlign: 'center',
								lineHeight: '1.07em',
							}}>
								Español
							</h2>

							{/* Divider */}
							<div style={{
								width: '80px',
								height: '4px',
								background: '#bff747',
								margin: '0 auto 35px',
								opacity: hoveredCard === 'es' ? 1 : 0.6,
								transition: 'all 0.3s ease',
								transform: hoveredCard === 'es' ? 'scaleX(1.3)' : 'scaleX(1)',
								borderRadius: '2px',
							}} />

							{/* Description */}
							<p style={{
								fontFamily: 'var(--font-inter)',
								fontSize: '18px',
								color: 'rgba(253, 253, 225, 0.7)',
								fontWeight: '400',
								lineHeight: '28px',
								marginBottom: '40px',
								textAlign: 'center',
							}}>
								Explora soluciones tecnológicas innovadoras
							</p>

							{/* CTA Button */}
							<div style={{
								display: 'flex',
								justifyContent: 'center',
							}}>
								<div style={{
									display: 'inline-flex',
									alignItems: 'center',
									gap: '10px',
									padding: '16px 40px',
									background: '#bff747',
									color: '#000',
									fontSize: '16px',
									fontWeight: '700',
									borderRadius: '8px',
									fontFamily: 'var(--font-inter)',
									border: '2px solid #bff747',
								}}>
									Continuar
									<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
										<path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
									</svg>
								</div>
							</div>
						</div>
					</Link>
				</div>

				{/* Footer */}
				<div style={{
					textAlign: 'center',
					marginTop: '100px',
					color: 'rgba(253, 253, 225, 0.4)',
					fontSize: '14px',
					fontWeight: '400',
					fontFamily: 'var(--font-inter)',
					lineHeight: '22px',
				}}>
					© 2024 AC95 · Technology Solutions
				</div>
			</div>
		</div>
	);
}

export default LanguageSelector;
