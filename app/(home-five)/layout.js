import { inter, libre_baskerville } from "../fonts";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// react modal video css
import "react-modal-video/css/modal-video.css";

// fonts
import "../../public/css/fontawesome.css";
import "../../public/css/icomoon.css";

//  Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/mousewheel";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import ImportBsJS from "@/components/BootstrapClient";
import Footer from "@/components/home-five/footer";
import Header from "@/components/home-five/header";
// main css
import "../../public/css/app.css";
import "../../public/css/main.css";
import "../../public/css/mobile-nav.css";

export const metadata = {
	title: "Aximo || Responsive Next.js Template - Home Five",
	description: "Aximo || Responsive Next.js Template Home Five",
};
// className={`${syne.variable} ${arimo.variable} ${bricolage_grotesque.variable} ${familjen_grotesk.variable} ${libre_baskerville.variable} ${playfair_display.variable} ${ClashGroteskSemibold.variable} ${inter.variable}`}
export default function HomeFiveLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${inter.variable} ${libre_baskerville.variable}`}>
				<ImportBsJS />
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
