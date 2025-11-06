import Image from "next/image";
import QuestionImg from "../../public/images/icon/question.svg";
import Star2Img from "../../public/images/v1/star2.png";
const faqData = {
	faq1: [
		{
			id: crypto.randomUUID(),
			title: "What services does AC95 offer?",
			text: "We specialize in custom software development, mobile apps, AI integration, e-commerce platforms, web development, digital marketing, dedicated teams, and brand strategy. Basically, if it's tech-related and helps your business grow, we do it.",
		},
		{
			id: crypto.randomUUID(),
			title: "What is your development process like?",
			text: "We follow an agile approach: Discovery & Strategy → Design & Development → Launch & Support. You're involved at every stage, with regular check-ins and demos to ensure we're building exactly what you need.",
		},
		{
			id: crypto.randomUUID(),
			title: "How much does a project cost?",
			text: "It depends on the scope and complexity. After understanding your requirements, we provide a detailed quote. We offer flexible pricing models including project-based, monthly subscriptions, and dedicated team hiring.",
		},
		{
			id: crypto.randomUUID(),
			title: "How long does a typical project take?",
			text: "It depends on what you need. Simple solutions can be ready in days, while more complex projects might take weeks or months. We'll give you a realistic timeline once we understand your requirements.",
		},
		{
			id: crypto.randomUUID(),
			title: "Do you offer ongoing support after launch?",
			text: "Absolutely. We offer monthly maintenance subscriptions for websites, apps, and software. This includes updates, bug fixes, security patches, performance optimization, and technical support.",
		},
	],
	faq2: [
		{
			id: crypto.randomUUID(),
			title: "Do you work with clients internationally?",
			text: "Yes! We have teams across Canada, the US, Mexico, Colombia, Panama, and Spain. We've successfully delivered projects in all these countries and work seamlessly across time zones.",
		},
		{
			id: crypto.randomUUID(),
			title: "What technologies do you work with?",
			text: "We work with modern tech stacks including React, Node.js, Python, cloud platforms (AWS, Azure), and leading AI tools. We choose the right technology based on your specific needs, not trends.",
		},
		{
			id: crypto.randomUUID(),
			title: "Can we hire your team on a monthly basis?",
			text: "Absolutely. We offer flexible hiring models: monthly retainers, project-based contracts, or sprint-based engagements. You get the talent you need, when you need it.",
		},
		{
			id: crypto.randomUUID(),
			title: "What industries do you work with?",
			text: "We've worked across e-commerce, fintech, healthcare, education, and more. Our approach is industry-agnostic—we focus on understanding your specific business challenges.",
		},
	],
};
function TwoColumnFaq() {
	return (
		<div className="section aximo-section-padding">
			<div className="container">
				<div className="aximo-section-title center">
					<h2>
						These FAQs help
						<span className="aximo-title-animation">
							clients learn about us
							<span className="aximo-title-icon">
								<Image src={Star2Img} alt="Star" />
							</span>
						</span>
					</h2>
				</div>
				<div className="row">
					<div className="col-lg-6">
						<div className="aximo-accordion-normal-wrap responsive-margin">
							{faqData.faq1.map((faq) => (
								<div key={faq.id} className="aximo-accordion-normal-item">
									<div className="aximo-accordion-normal-icon">
										<Image src={QuestionImg} alt="QuestionImg" />
									</div>
									<div className="aximo-accordion-normal-data">
										<h3>{faq.title}</h3>
										<p>{faq.text}</p>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="col-lg-6">
						<div className="aximo-accordion-normal-wrap">
							{faqData.faq2.map((faq) => (
								<div key={faq.id} className="aximo-accordion-normal-item">
									<div className="aximo-accordion-normal-icon">
										<Image src={QuestionImg} alt="QuestionImg" />
									</div>
									<div className="aximo-accordion-normal-data">
										<h3>{faq.title}</h3>
										<p>{faq.text}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TwoColumnFaq;
