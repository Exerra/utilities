import Header from "../../components/header";
import { faPercentage, faSliders } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import getAspectRatio from "../../util/aspectratio";
import Meta from "../../components/meta";
import Breadcrumbs from 'nextjs-breadcrumbs';

const Pane = ({ title, children, className }: { title: string, children: React.ReactNode, className: string }) => {
	return (
		<div className={`p-10 rounded-2xl sf font-semibold ${className}`}>
			<h3 className={"text-5xl"}>{title}</h3>
			<div className={"mt-10"}>
				{children}
			</div>
		</div>
	)
}

const AspectRatioCalculator = () => {
	const [ogWidth, setOGWidth] = useState(1920)
	const [ogHeight, setOGHeight] = useState(1080)
	const [newWidth, setNewWidth] = useState<number | string>("")
	const [newHeight, setNewHeight] = useState<number | string>("")

	const [aspectRatio, setAspectRatio] = useState("16:9")

	return (
		<>
			<Meta title={"Aspect Ratio Calculator | Exerra Utilities"} description={"Calculate the missing value for a particular aspect ration in Aspect Ratio Calculator, an Exerra Utility project."} uri={"/utility/aspect-ratio-calculator"} />

			<Header bg={"bg-blue-light"} fg={"text-blue-heavy"} title={"Aspect Ratio Calculator"} description={"Calculate the missing value for a particular aspect ratio"} icon={faPercentage} />

			<div className={"container md:mx-auto mt-6 justify-center"}>
				<div className={"grid grid-cols-1 lg:grid-cols-2 gap-6"}>
					<Pane title={"Original width/height"} className={"bg-beige-light text-beige-heavy"}>
						<div className={"mb-5"}>
							<label htmlFor={"og-w"} className={"block mb-2 text-lg"}>Width</label>
							<input
								type={"number"}
								id={"og-w"}
								className={"w-full bg-white/40 border border-[#F0E3D6] text-beige-heavy/80 placeholder:text-beige-heavy/50 rounded-xl px-5 py-5"}
								placeholder={"1920"}
								defaultValue={ogWidth}
								onChange={async (c) => {
									const value = parseInt(c.currentTarget.value)
									await setOGWidth(value)

									const aspRatio = getAspectRatio(value, ogHeight)

									setAspectRatio(aspRatio)

									if (newWidth != "") {
										setNewHeight("")
										setNewWidth("")
									}
								}}
							/>
						</div>
						<div>
							<label htmlFor={"og-h"} className={"block mb-2 text-lg"}>Height</label>
							<input
								type={"number"}
								id={"og-h"}
								className={"w-full bg-white/40 border border-[#F0E3D6] text-beige-heavy/80 placeholder:text-beige-heavy/50 rounded-xl px-5 py-5"}
								placeholder={"1080"}
								defaultValue={ogHeight}
								onChange={(c) => {
									const value = parseInt(c.currentTarget.value)
									setOGHeight(value)

									const aspRatio = getAspectRatio(ogWidth, value)

									setAspectRatio(aspRatio)

									if (newWidth != "") {
										setNewHeight("")
										setNewWidth("")
									}
								}}
							/>
						</div>
					</Pane>
					<Pane title={"New width/height"} className={"bg-red-light text-red-heavy"}>
						<div className={"mb-5"}>
							<label htmlFor={"og-w"} className={"block mb-2 text-lg"}>Width</label>
							<input
								type={"number"}
								id={"new-w"}
								className={"w-full bg-white/40 border border-[#FCD1DB] text-red-heavy/80 placeholder:text-red-heavy/50 rounded-xl px-5 py-5"}
								onChange={(c) => {
									setNewWidth(parseInt(c.currentTarget.value))
									const value = Math.ceil((ogHeight / ogWidth) * parseInt(c.currentTarget.value))

									setNewHeight(isNaN(value) ? "" : value)
								}}
								value={newWidth}
							/>
						</div>
						<div>
							<label htmlFor={"og-h"} className={"block mb-2 text-lg"}>Height</label>
							<input
								type={"number"}
								id={"new-h"}
								className={"w-full bg-white/40 border border-[#FCD1DB] text-red-heavy/80 placeholder:text-red-heavy/50 rounded-xl px-5 py-5"}
								onChange={(c) => {
									setNewHeight(parseInt(c.currentTarget.value))
									const value = Math.ceil((ogWidth / ogHeight) * parseInt(c.currentTarget.value))

									setNewWidth(isNaN(value) ? "" : value)
								}}
								value={newHeight}
							/>
						</div>
					</Pane>
				</div>

				<div className={"p-10 bg-orange-light text-orange-heavy mt-6 rounded-2xl sf font-semibold w-auto mx-auto"}>
					<h3 className={"text-5xl"}>
						Aspect ratio
					</h3>
					<p className={"mt-3 text-2xl"}>{aspectRatio}</p>
				</div>
			</div>
		</>
	)
}

export default AspectRatioCalculator