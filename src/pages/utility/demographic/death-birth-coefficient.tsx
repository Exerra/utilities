import React, { useState } from "react";
import Meta from "../../../components/meta";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";
import Header from "../../../components/header";
import Pane from "../../../components/pane";
import getInputValue from "../../../util/getinputvalue";

const calculateCoefficient = (value: number, population: number, rounding?: number) => {
	if (!rounding) return (value / population) * 1000

	return +(Math.round(Number( ((value / population) * 1000) + `e+${rounding}` )) + `e-${rounding}`)
}

const DeathBirthCoefficient = () => {
	const [ population, setPopulation ] = useState<number>()
	const [ deaths, setDeaths ] = useState<number>()
	const [ births, setBirths ] = useState<number>()

	const [ rounding, setRounding ] = useState<number | undefined>()

	const [ deathCoefficient, setDeathCoefficient ] = useState<number | null>()
	const [ birthCoefficient, setBirthCoefficient ] = useState<number | null>()

	return (
		<>
			<Meta
				title={"Death/Birth coefficient calculator | Exerra Utilities"}
				description={"Calculate the death & birth coefficient based on death/birth rates and the population in Death/Birth coefficient calculator, an Exerra Utility project."}
				uri={"/utility/demographic/death-birth-coefficient"}
			/>

			<Header
				bg={"bg-blue-light"}
				fg={"text-blue-heavy"}
				title={"Death/Birth coefficient calculator"}
				description={"Calculate the death & birth coefficient based on death/birth rates and the population"}
				icon={faCalculator}
			/>

			<div className={"container md:mx-auto mt-6 justify-center"}>
				<div className={"grid grid-cols-1 lg:grid-cols-2 gap-6"}>
					<Pane title={"Death coefficient"} className={"bg-beige-light text-beige-heavy"} subClassName={"flex flex-col gap-6 w-full"}>

						<p className={`${deathCoefficient ? "" : "hidden"} text-2xl`}><span className={"sf semibold"}>Value:</span> {deathCoefficient}</p>

						<div>
							<label htmlFor={"population-input"} className={"block mb-2 text-lg"}>Population</label>
							<input
								type={"number"}
								id={"population-input"}
								className={"w-full bg-white/50 border border-[#F0E3D6] text-beige-heavy/80 placeholder:text-beige-heavy/50 rounded-xl px-5 py-5"}
								placeholder={"20000000"}
								onChange={(c) => {
									setPopulation(getInputValue(c))
								}}
								defaultValue={population}
							/>
						</div>

						<div>
							<label htmlFor={"death-input"} className={"block mb-2 text-lg"}>Deaths</label>
							<input
								type={"number"}
								id={"death-input"}
								className={"w-full bg-white/50 border border-[#F0E3D6] text-beige-heavy/80 placeholder:text-beige-heavy/50 rounded-xl px-5 py-5"}
								placeholder={"123456"}
								onChange={(c) => {
									setDeaths(getInputValue(c))
								}}
							/>
						</div>

						<div>
							<label htmlFor={"rounding"} className={"block mb-2 text-lg"}>Rounding after decimal (optional)</label>
							<input
								type={"number"}
								id={"rounding"}
								className={"w-full bg-white/50 border border-[#F0E3D6] text-beige-heavy/80 placeholder:text-beige-heavy/50 rounded-xl px-5 py-5"}
								placeholder={"123456"}
								onChange={(c) => {
									setRounding(getInputValue(c))
								}}
								defaultValue={rounding!}
							/>
						</div>

						<button
							className={"bg-white/50 border border-[#F0E3D6] text-beige-heavy/80 hover:bg-white/80 text-2xl transition ease-in-out rounded-xl px-5 py-5"}
							onClick={() => {
								if (!deaths || !population) return

								setDeathCoefficient(calculateCoefficient(deaths, population, rounding))
							}}
						>
							Calculate death coefficient
						</button>
					</Pane>

					<Pane title={"Birth coefficient"} className={"bg-beige-light text-beige-heavy"} subClassName={"flex flex-col gap-6 w-full"}>

						<p className={`${birthCoefficient ? "" : "hidden"} text-2xl`}><span className={"sf semibold"}>Value:</span> {birthCoefficient}</p>

						<div>
							<label htmlFor={"population-input-1"} className={"block mb-2 text-lg"}>Population</label>
							<input
								type={"number"}
								id={"population-input-1"}
								className={"w-full bg-white/50 border border-[#F0E3D6] text-beige-heavy/80 placeholder:text-beige-heavy/50 rounded-xl px-5 py-5"}
								placeholder={"20000000"}
								onChange={(c) => {
									setPopulation(getInputValue(c))
								}}
								value={population}
							/>
						</div>

						<div>
							<label htmlFor={"birth-input"} className={"block mb-2 text-lg"}>Births</label>
							<input
								type={"number"}
								id={"birth-input"}
								className={"w-full bg-white/50 border border-[#F0E3D6] text-beige-heavy/80 placeholder:text-beige-heavy/50 rounded-xl px-5 py-5"}
								placeholder={"123456"}
								onChange={(c) => {
									setBirths(getInputValue(c))
								}}
							/>
						</div>

						<div>
							<label htmlFor={"rounding-1"} className={"block mb-2 text-lg"}>Rounding after decimal (optional)</label>
							<input
								type={"number"}
								id={"rounding-1"}
								className={"w-full bg-white/50 border border-[#F0E3D6] text-beige-heavy/80 placeholder:text-beige-heavy/50 rounded-xl px-5 py-5"}
								placeholder={"123456"}
								onChange={(c) => {
									setRounding(getInputValue(c))
								}}
								defaultValue={rounding}
							/>
						</div>

						<button
							className={"bg-white/50 border border-[#F0E3D6] text-beige-heavy/80 hover:bg-white/80 text-2xl transition ease-in-out rounded-xl px-5 py-5"}
							onClick={() => {
								if (!births || !population) return

								setBirthCoefficient(calculateCoefficient(births, population, rounding))
							}}
						>
							Calculate birth coefficient
						</button>
					</Pane>
				</div>
			</div>
		</>
	)
}

export default DeathBirthCoefficient