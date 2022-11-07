import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../pages/Home/Home"
import Login from "../pages/SignIn/SignIn"
import Profile from "../pages/User/User"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "login",
                element:  <Login /> 
            },
            {
                path:"profile",
                element: <Profile />
            }
        ]
    }
])

export default router