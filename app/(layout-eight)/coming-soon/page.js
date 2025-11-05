"use client";
import CountDownRenderer from "@/components/coming-soon";
import { useEffect, useState } from "react";
import Countdown from "react-countdown";

function CommingSoonPage() {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);
	return isClient && <Countdown date="Decembar 31, 2025" renderer={CountDownRenderer} />;
}

export default CommingSoonPage;
