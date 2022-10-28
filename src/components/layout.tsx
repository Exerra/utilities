import NavBar from "./navbar";

const Layout = ({ children }: any) => {
	return (
		<>
			<NavBar />
			<main className={"mx-3 2xl:mx-32 3xl:mx-auto font-poppins"}>{children}</main>
			<footer className={"m-10"}>
				<p className={"text-center"}>&copy; Exerra</p>
			</footer>
		</>
	)
}

export default Layout