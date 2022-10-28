import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import '@fortawesome/fontawesome-svg-core/styles.css'

const Header = ({ bg, fg, title, description, icon }: { bg: string, fg: string, title: string, description: string, icon: IconDefinition }) => {
	return (
		<header className={"container mx-auto mt-3"}>
			<div className={`${bg} p-10 justify-between items-center sf rounded-2xl flex flex-row items-center`}>
				<div className={`${fg} sf`}>
					<h1 className={"text-6xl font-semibold mb-5"}>{title}</h1>
					<h2 className={"text-3xl font-semibold"}>{description}</h2>
				</div>
				<div className={`${fg} hidden md:block ml-10 md:ml-18`}>
					<FontAwesomeIcon className={"text-5xl md:text-7xl xl:text-8xl"} icon={icon} />
				</div>
			</div>
		</header>
	)
}

export default Header