"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Star2Img from "../../public/images/v1/star2.png";
import Field from "../common/Field";

function ForgotPasswordForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const [isSubmitted, setIsSubmitted] = useState(false);

	const submitForm = (formData) => {
		console.log("Forgot Password Form Data = ", formData);
		// Aquí puedes agregar la lógica de envío de email
		setIsSubmitted(true);
	};

	if (isSubmitted) {
		return (
			<div className="section aximo-section-padding" style={{ paddingTop: '100px' }}>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-6">
							<div className="aximo-section-title center" style={{ marginTop: '60px' }}>
								<h2>
									<span className="aximo-title-animation">
										Check your email
										<span className="aximo-title-icon">
											<Image src={Star2Img} alt="Star" />
										</span>
									</span>
								</h2>
							</div>

							<div style={{
								textAlign: 'center',
								marginTop: '40px',
								padding: '40px',
								backgroundColor: '#f8f8f8',
								borderRadius: '12px'
							}}>
								<div style={{
									fontSize: '60px',
									marginBottom: '20px'
								}}>
									📧
								</div>
								<p style={{
									fontSize: '1.1rem',
									lineHeight: '1.6',
									marginBottom: '20px',
									color: '#666'
								}}>
									We&apos;ve sent a password reset link to your email address.
									Please check your inbox and follow the instructions.
								</p>
								<p style={{
									fontSize: '0.95rem',
									color: '#999',
									marginBottom: '30px'
								}}>
									Didn&apos;t receive the email? Check your spam folder.
								</p>
								<Link
									href="/login"
									style={{
										display: 'inline-block',
										backgroundColor: '#bff747',
										color: '#0c0c0c',
										padding: '12px 30px',
										borderRadius: '25px',
										textDecoration: 'none',
										fontWeight: '600',
										transition: 'all 0.3s'
									}}
									onMouseOver={(e) => {
										e.target.style.backgroundColor = '#ff4612';
										e.target.style.color = '#ffffff';
									}}
									onMouseOut={(e) => {
										e.target.style.backgroundColor = '#bff747';
										e.target.style.color = '#0c0c0c';
									}}
								>
									Back to Login
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="section aximo-section-padding" style={{ paddingTop: '100px' }}>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-6">
						<div className="aximo-section-title center" style={{ marginTop: '60px' }}>
							<h2>
								<span className="aximo-title-animation">
									Forgot password?
									<span className="aximo-title-icon">
										<Image src={Star2Img} alt="Star" />
									</span>
								</span>
							</h2>
							<p style={{ marginTop: '20px', fontSize: '1.1rem' }}>
								No worries, we&apos;ll send you reset instructions
							</p>
						</div>

						<div className="aximo-main-form" style={{ marginTop: '40px' }}>
							<form onSubmit={handleSubmit(submitForm)}>
								<div className="aximo-main-field">
									<Field label="Email address" error={errors.email}>
										<input
											{...register("email", {
												required: "Email is required.",
												pattern: {
													value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
													message: "Invalid email address"
												}
											})}
											type="email"
											name="email"
											id="email"
											placeholder="hello@ac95.ca"
										/>
									</Field>
								</div>

								<button
									id="aximo-main-btn"
									type="submit"
									style={{
										width: '100%',
										backgroundColor: '#bff747',
										color: '#0c0c0c',
										border: 'none',
										padding: '15px',
										fontSize: '1rem',
										fontWeight: '600',
										cursor: 'pointer',
										transition: 'all 0.3s',
										marginTop: '10px'
									}}
									onMouseOver={(e) => {
										e.target.style.backgroundColor = '#ff4612';
										e.target.style.color = '#ffffff';
									}}
									onMouseOut={(e) => {
										e.target.style.backgroundColor = '#bff747';
										e.target.style.color = '#0c0c0c';
									}}
								>
									Send reset link
								</button>

								<div style={{
									textAlign: 'center',
									marginTop: '30px',
									fontSize: '0.95rem'
								}}>
									<Link
										href="/login"
										style={{
											color: '#ff4612',
											textDecoration: 'none',
											fontWeight: '600',
											display: 'inline-flex',
											alignItems: 'center',
											gap: '8px'
										}}
									>
										<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M12.5 15L7.5 10L12.5 5" stroke="#ff4612" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
										</svg>
										Back to login
									</Link>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ForgotPasswordForm;
