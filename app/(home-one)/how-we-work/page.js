import Hero from "@/components/home-four/hero";
import Services from "@/components/home-four/services";
import WhyChooseUs from "@/components/home-four/why-choose-us";
import NumberBox from "@/components/home-four/number-box";
import ChooseModel from "@/components/home-four/choose-model";

function HowWeWork() {
	return (
		<div className="aximo-all-section bg-light4" style={{ paddingTop: '100px' }}>
			<Hero />
			<Services />
			<WhyChooseUs />
			<NumberBox />
			<ChooseModel />
		</div>
	);
}

export default HowWeWork;
