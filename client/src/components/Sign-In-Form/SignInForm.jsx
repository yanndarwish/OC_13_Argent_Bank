import { Form } from "react-router-dom"

const SignInForm = () => {
	const handleSubmit = (e) => {
		e.preventDefault()
		const elements = e.target.elements
		const payload = {
			username: elements.username.value,
			password: elements.password.value
		}
		console.log(payload)
	}
	return (
		<Form onSubmit={handleSubmit}>
			<div className="input-wrapper">
				<label htmlFor="username">Username</label>
				<input type="text" id="username" />
			</div>
			<div className="input-wrapper">
				<label htmlFor="password">Password</label>
				<input type="password" id="password" />
			</div>
			<div className="input-remember">
				<input type="checkbox" id="remember-me" />
				<label htmlFor="remember-me">Remember me</label>
			</div>
			<button type="submit" className="sign-in-button">
				Sign In
			</button>
		</Form>
	)
}

export default SignInForm
