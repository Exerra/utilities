import Link from "next/link"

const NavBar = () => {
	return (
		<nav className="border-gray-200 px-2 sm:px-4 py-2.5 rounded md:mt-3 mx-3 2xl:mx-32 3xl:mx-auto">
			<div className="container flex flex-wrap justify-between items-center mx-auto">
				<Link href="/" className="flex items-center hover:cursor-pointer sf text-xl font-semibold">
					<span className="sf self-center text-xl font-semibold whitespace-nowrap hover:cursor-pointer">Exerra Utilities</span>
				</Link>
			</div>
		</nav>
	)
}

export default NavBar