import { familjen_grotesk, inter } from "../fonts";

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
import Footer from "@/components/home-three/footer";
import Header from "@/components/home-three/header";

// main css
import "../../public/css/app.css";
import "../../public/css/main.css";
import "../../public/css/mobile-nav.css";

export const metadata = {
	title: "Aximo || Responsive Next.js Template - Home Three",
	description: "Aximo || Responsive Next.js Template Home Three",
};

export default function HomeThreeLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${inter.variable} ${familjen_grotesk.variable}`}>
				<ImportBsJS />
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
