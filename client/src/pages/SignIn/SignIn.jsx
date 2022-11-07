import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import SignInForm from "../../components/Sign-In-Form/SignInForm"

const SignIn = () => {
	const auth = useSelector((state) => state.login.token)


	if (auth) {
		return <Navigate to="/profile" />
	}

	return (
		<main className="main sign-in-main bg-dark">
			<section className="sign-in-content">
				<i className="fa fa-user-circle sign-in-icon"></i>
				<h1>Sign In</h1>
				<SignInForm />
			</section>
		</main>
	)
}

export default SignIn
