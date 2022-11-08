import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import LoginForm from "../../components/LoginForm/LoginForm"

const Login = () => {
	const auth = useSelector((state) => state.login.token)


	if (auth) {
		return <Navigate to="/profile" />
	}

	return (
		<main className="main sign-in-main bg-dark">
			<section className="sign-in-content">
				<i className="fa fa-user-circle sign-in-icon"></i>
				<h1>Sign In</h1>
				<LoginForm />
			</section>
		</main>
	)
}

export default Login
