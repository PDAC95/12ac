"use client";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Star2Img from "../../public/images/v1/star2.png";
import Field from "../common/Field";

function LoginForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const submitForm = (formData) => {
		console.log("Login Form Data = ", formData);
		// Aquí puedes agregar la lógica de autenticación
	};

	return (
		<div className="section aximo-section-padding" style={{ paddingTop: '100px' }}>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-6">
						<div className="aximo-section-title center" style={{ marginTop: '60px' }}>
							<h2>
								<span className="aximo-title-animation">
									Welcome back
									<span className="aximo-title-icon">
										<Image src={Star2Img} alt="Star" />
									</span>
								</span>
							</h2>
							<p style={{ marginTop: '20px', fontSize: '1.1rem' }}>
								Sign in to access your account
							</p>
						</div>

						<div className="aximo-main-form" style={{ marginTop: '40px' }}>
							{/* Google Sign In Button */}
							<button
								type="button"
								onClick={() => console.log("Google Sign In clicked")}
								style={{
									width: '100%',
									backgroundColor: '#ffffff',
									color: '#191931',
									border: '1px solid #e0e0e0',
									padding: '12px',
									fontSize: '1rem',
									fontWeight: '500',
									cursor: 'pointer',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									gap: '12px',
									borderRadius: '8px',
									transition: 'all 0.3s',
									marginBottom: '30px'
								}}
								onMouseOver={(e) => {
									e.target.style.backgroundColor = '#f8f8f8';
									e.target.style.borderColor = '#bff747';
								}}
								onMouseOut={(e) => {
									e.target.style.backgroundColor = '#ffffff';
									e.target.style.borderColor = '#e0e0e0';
								}}
							>
								<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M19.8055 10.2292C19.8055 9.55639 19.7501 8.8799 19.6319 8.21799H10.2002V12.0491H15.6014C15.3775 13.2911 14.6573 14.3898 13.6025 15.0879V17.5866H16.825C18.7174 15.8449 19.8055 13.2728 19.8055 10.2292Z" fill="#4285F4"/>
									<path d="M10.2002 20.0006C12.9515 20.0006 15.2719 19.1151 16.8287 17.5865L13.6062 15.0879C12.7096 15.6979 11.5521 16.0433 10.2039 16.0433C7.54341 16.0433 5.28352 14.2832 4.49022 11.9165H1.16602V14.4923C2.75665 17.8405 6.30579 20.0006 10.2002 20.0006Z" fill="#34A853"/>
									<path d="M4.48649 11.9167C4.04556 10.6747 4.04556 9.32988 4.48649 8.08789V5.51208H1.16597C-0.388657 8.68559 -0.388657 12.3188 1.16597 15.4923L4.48649 11.9167Z" fill="#FBBC04"/>
									<path d="M10.2002 3.95805C11.6248 3.936 13.0029 4.47247 14.036 5.45722L16.8913 2.60218C15.1852 0.994704 12.9369 0.112012 10.2002 0.139076C6.30579 0.139076 2.75665 2.29923 1.16602 5.65131L4.48654 8.22712C5.27616 5.85675 7.53973 3.95805 10.2002 3.95805Z" fill="#EA4335"/>
								</svg>
								Sign in with Google
							</button>

							{/* Divider */}
							<div style={{
								display: 'flex',
								alignItems: 'center',
								textAlign: 'center',
								marginBottom: '30px'
							}}>
								<div style={{
									flex: 1,
									borderBottom: '1px solid #e0e0e0'
								}}></div>
								<span style={{
									padding: '0 20px',
									color: '#666',
									fontSize: '0.9rem',
									fontWeight: '500'
								}}>OR</span>
								<div style={{
									flex: 1,
									borderBottom: '1px solid #e0e0e0'
								}}></div>
							</div>

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

								<div className="aximo-main-field">
									<Field label="Password" error={errors.password}>
										<input
											{...register("password", {
												required: "Password is required.",
												minLength: {
													value: 6,
													message: "Password must be at least 6 characters"
												}
											})}
											type="password"
											name="password"
											id="password"
											placeholder="••••••••"
										/>
									</Field>
								</div>

								<div className="aximo-main-field" style={{
									display: 'flex',
									justifyContent: 'space-between',
									alignItems: 'center',
									marginBottom: '30px',
									flexWrap: 'nowrap'
								}}>
									<label style={{
										display: 'flex',
										alignItems: 'center',
										cursor: 'pointer',
										fontSize: '0.95rem',
										whiteSpace: 'nowrap'
									}}>
										<input
											type="checkbox"
											style={{
												marginRight: '8px',
												width: '14px',
												height: '14px',
												cursor: 'pointer'
											}}
										/>
										Remember me
									</label>
									<Link
										href="/forgot-password"
										style={{
											color: '#ff4612',
											textDecoration: 'none',
											fontSize: '0.95rem',
											fontWeight: '500',
											whiteSpace: 'nowrap'
										}}
									>
										Forgot password?
									</Link>
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
									Sign In
								</button>

								<div style={{
									textAlign: 'center',
									marginTop: '30px',
									fontSize: '0.95rem'
								}}>
									Don&apos;t have an account?{' '}
									<Link
										href="/contact-us"
										style={{
											color: '#ff4612',
											textDecoration: 'none',
											fontWeight: '600'
										}}
									>
										Contact us
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

export default LoginForm;
