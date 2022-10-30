import Meta from "../../components/meta";
import React, { useState } from "react";
import { faGauge } from "@fortawesome/free-solid-svg-icons";
import Header from "../../components/header";
import Pane from "../../components/pane";
import humanizeDuration from "humanize-duration";
import getInputValue from "../../util/getinputvalue";

const calculateTime = (speed: number, speedMeasurement: string, size: number, sizeMeasurement: string): string => {
	const finalize = (seconds: number): string => {
		return humanizeDuration(seconds * 1000, {
			round: true,
			conjunction: " and ",
			serialComma: false
		})
	}

	const calculateSpeed = (speed: number, speedMeasurement: string): number => {
		if (speedMeasurement == "gbps") return speed * 1000

		return speed
	}

	const calculateSize = (size: number, sizeMeasurement: string): number => {
		if (sizeMeasurement == "tb") return ((size * 8) * 1000)

		return (size * 8)
	}

	let seconds = (calculateSize(size, sizeMeasurement) / calculateSpeed(speed, speedMeasurement)) * 1000

	return finalize(seconds)
}

const DownloadTimeCalculator = () => {
	const [ speed, setSpeed ] = useState<number>()
	const [ speedMeasurement, setSpeedMeasurement ] = useState<string>("mbps")

	const [ size, setSize ] = useState<number>()
	const [ sizeMeasurement, setSizeMeasurement ] = useState<string>("gb")

	const [ calculatedSpeed, setCalculatedSpeed ] = useState<string>("Not calculated yet")

	return (
		<>
			<Meta title={"Download Time Calculator | Exerra Utilities"} description={"Calculate the download time for a particular size with your current internt speed in Download Time Calculator, an Exerra Utility project."} uri={"/utility/aspect-ratio-calculator"} />

			<Header bg={"bg-red-light"} fg={"text-red-heavy"} title={"Download Time Calculator"} description={"Calculate the download time for a particular size with your current internt speed"} icon={faGauge} />

			<div className={"container md:mx-auto mt-6 justify-center"}>
				<div className={"grid grid-cols-1 lg:grid-cols-2 gap-6"}>
					<Pane title={"Your speed & file size"} className={"bg-beige-light text-beige-heavy"} subClassName={"flex flex-col gap-6"}>
						<div className={"flex flex-row gap-6 justify-between"}>
							<div className={"w-full"}>
								<label htmlFor={"speed-input"} className={"block mb-2 text-lg"}>Speed</label>
								<input
									type={"number"}
									id={"speed-input"}
									className={"w-full bg-white/50 border border-[#F0E3D6] text-beige-heavy/80 placeholder:text-beige-heavy/50 rounded-xl px-5 py-5"}
									placeholder={"30"}
									onChange={(c) => {
										setSpeed(getInputValue(c))
									}}
								/>
							</div>
							<div>
								<label htmlFor={"speed-measurement"} className={"block mb-2 text-lg"}>Measurement</label>
								<select
									className={"w-full bg-white/50 border border-[#F0E3D6] text-beige-heavy/80 rounded-xl px-5 py-5 hover:bg-white/70 appearance-none"}
									onChange={(c) => {
										setSpeedMeasurement(getInputValue(c))
									}}
								>
									<option value={"mbps"}>Mbps</option>
									<option value={"gbps"}>Gbps</option>
								</select>
							</div>
						</div>
						<div className={"flex flex-row gap-6 justify-between"}>
							<div className={"w-full"}>
								<label htmlFor={"size-input"} className={"block mb-2 text-lg"}>Size</label>
								<input
									type={"number"}
									id={"size-input"}
									className={"w-full bg-white/50 border border-[#F0E3D6] text-beige-heavy/80 placeholder:text-beige-heavy/50 rounded-xl px-5 py-5"}
									placeholder={"120"}
									onChange={(c) => {
										setSize(getInputValue(c))
									}}
								/>
							</div>

							<div>
								<label htmlFor={"speed-measurement"} className={"block mb-2 text-lg"}>Measurement</label>
								<select
									className={"w-full bg-white/50 border border-[#F0E3D6] text-beige-heavy/80 rounded-xl px-5 py-5 hover:bg-white/70 appearance-none"}
									onChange={(c) => {
										setSizeMeasurement(getInputValue(c))
									}}
								>
									<option value={"gb"}>GB</option>
									<option value={"tb"}>TB</option>
								</select>
							</div>
						</div>

						<button
							className={"w-full bg-white/50 border border-[#F0E3D6] text-beige-heavy/80 hover:bg-white/80 text-2xl transition ease-in-out rounded-xl px-5 py-5"}
							onClick={() => {
								console.log(size, sizeMeasurement, speed, speedMeasurement, (size! * 8))
								if (!size || !sizeMeasurement || !speed || !speedMeasurement) return

								setCalculatedSpeed(calculateTime(speed, speedMeasurement, size, sizeMeasurement))
							}}
						>
							Calculate download time
						</button>
					</Pane>

					<Pane title={"Calculated speed"} className={"bg-beige-light text-beige-heavy"} subClassName={"text-3xl font-medium"}>
						{calculatedSpeed}
					</Pane>
				</div>
			</div>
		</>
	)
}

export default DownloadTimeCalculator