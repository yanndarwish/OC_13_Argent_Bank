import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"

const Root = () => {
	return (
		<React.Fragment>
			<Header />
			<Outlet />
			<Footer />
		</React.Fragment>
	)
}

export default Root
