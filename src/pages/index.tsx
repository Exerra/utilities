import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/header";
import UtilityCard from "../components/utilitycard";
import { faCalculator, faGauge, faPercent, faSliders } from "@fortawesome/free-solid-svg-icons";
import Meta from "../components/meta";

const Home: NextPage = () => {
	return (
		<>
			<Meta title={"Exerra Utilities"} description={"Various utilities by Exerra. Currently there is only one utility - Aspect Ratio Calculator."} uri={"/"} />

			<Header bg={"bg-blue-light"} fg={"text-blue-heavy"} title={"Exerra Utilities"} description={"Various utilities that might be handy"} icon={faSliders} />

			<div className={"container md:mx-auto mt-10 md:mt-36 xl-mt:10 justify-center"} id={"utilities"}>
				<div>
					<h3 className={"text-5xl mb-5 sf semibold"}>Technical</h3>
					<div className={"flex flex-wrap gap-6 justify-between"}>
						<UtilityCard title={"Aspect ratio calculator"} slug={"aspect-ratio-calculator"} bg={"#D7F0F1"} fg={"#0D2525"} hover={"#CBEBED"} icon={faPercent} />
						<UtilityCard title={"Download time calculator"} slug={"download-time-calculator"} bg={"#FEF1F4"} fg={"#31040D"} hover={"#FDE1E8"} icon={faGauge} />
					</div>
				</div>

				<div className={"mt-16"}>
					<h3 className={"text-5xl mb-5 sf semibold"}>Demographic</h3>
					<div className={"flex flex-wrap gap-6 justify-between"}>
						<UtilityCard title={"Death/Birth coefficient calculator"} slug={"demographic/death-birth-coefficient"} bg={"#F9F4EF"} fg={"#2E1F11"} hover={"#F4ECE3"} icon={faCalculator} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;