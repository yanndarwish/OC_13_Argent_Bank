import { Outlet } from "react-router-dom"

const Root = () => {
	return (
		<div>
			<header>Root</header>
            <Outlet />
		</div>
	)
}

export default Root
