import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import store  from "./redux/store/store"
import { Provider } from "react-redux"
import router from "./router/router"


import "./App.css"
import "./components/Header/Header.css"
import "./components/Hero/Hero.css"
import "./components/Feature-Item/Feature-Item.css"
import "./components/LoginForm/LoginForm.css"
import "./pages/User/User.css"
import "./components/Account/Account.css"
import "./components/Footer/Footer.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<Provider store={store}>
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>
	</Provider>
)
