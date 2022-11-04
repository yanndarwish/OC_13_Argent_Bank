import { createBrowserRouter } from "react-router-dom"
import Root from "../components/Root"
import Home from "../pages/Home/Home"
import SignIn from "../pages/SignIn/SignIn"

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/sign-in",
				element: <SignIn />,
			},
		],
	},
])

export default router
