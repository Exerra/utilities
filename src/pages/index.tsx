import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/header";
import UtilityCard from "../components/utilitycard";
import { faPercent, faSliders } from "@fortawesome/free-solid-svg-icons";
import Meta from "../components/meta";

const Home: NextPage = () => {
	return (
		<>
			<Meta title={"Exerra Utilities"} description={"Various utilities by Exerra. Currently there is only one utility - Aspect Ratio Calculator."} uri={"/"} image={"https://cdn.exerra.xyz/png/pfp.png"} />

			<Header bg={"bg-blue-light"} fg={"text-blue-heavy"} title={"Exerra Utilities"} description={"Various utilities that might be handy"} icon={faSliders} />

			<div className={"container md:mx-auto mt-10 md:mt-36 xl-mt:10 justify-center"}>
				<div className={"flex flex-wrap gap-6 justify-between"} id={"utilities"}>
					<UtilityCard title={"Aspect ratio calculator"} slug={"aspect-ratio-calculator"} bg={"#D7F0F1"} fg={"#0D2525"} hover={"#CBEBED"} icon={faPercent} />
				</div>
			</div>
		</>
	);
};

export default Home;

type TechnologyCardProps = {
	name: string;
	description: string;
	documentation: string;
};

const TechnologyCard = ( {
							 name,
							 description,
							 documentation,
						 }: TechnologyCardProps ) => {
	return (
		<section
			className="flex flex-col justify-center rounded border-2 border-gray-500 p-6 shadow-xl duration-500 motion-safe:hover:scale-105">
			<h2 className="text-lg text-gray-700">{name}</h2>
			<p className="text-sm text-gray-600">{description}</p>
			<a
				className="m-auto mt-3 w-fit text-sm text-violet-500 underline decoration-dotted underline-offset-2"
				href={documentation}
				target="_blank"
				rel="noreferrer"
			>
				Documentation
			</a>
		</section>
	);
};
