// import {
// 	ClashGroteskSemibold,
// 	arimo,
// 	bricolage_grotesque,
// 	familjen_grotesk,
// 	inter,
// 	libre_baskerville,
// 	playfair_display,
// 	syne,
// } from "../fonts";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// fonts
import "../../public/css/fontawesome.css";

// main css
import Footer from "@/components/coming-soon/Footer";
import Header from "@/components/coming-soon/Header";

import "../../public/css/app.css";
import "../../public/css/main.css";

export const metadata = {
	title: "Aximo || Responsive Next.js Template",
	description: "Aximo || Responsive Next.js Template",
};

export default function LayoutEight({ children }) {
	return (
		<html lang="en">
			<body>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
