import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HEX } from "../types/color";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";
import '@fortawesome/fontawesome-svg-core/styles.css'

type NozareCardProps = {
	title: string,
	slug: string,
	bg: HEX,
	fg: HEX,
	hover: HEX,
	icon: IconDefinition
}

const UtilityCard = ( { title, slug, bg, fg, hover, icon }: NozareCardProps ) => {
	const [ hovering, setHover ] = useState( false ) // this is a weird workaround which could (read: should) be improved later with custom tailwind classes when the colours are figured out, but for now this works

	return (
		<Link href={`/utility/${slug}`}>
			<div
				onMouseLeave={() => setHover( false )} onMouseEnter={() => setHover( true )}
				className={`p-10 py-12 w-full basis-1/1 md:basis-1/3 grow xl:w-auto 2xl:basis-1/5 flex flex-row items-center justify-between rounded-2xl transition ease-in-out hover:cursor-pointer`}
				style={{ backgroundColor: (hovering ? hover : bg), color: fg }}
			>
				<h3 className={"text-4xl font-semibold sf text-left"}>{title}</h3>
				<div className={"sm:block ml-10 md:ml-18"}>
					<FontAwesomeIcon className={"text-5xl md:text-6xl"} icon={icon}/>
				</div>
			</div>
		</Link>
	)
}

export default UtilityCard