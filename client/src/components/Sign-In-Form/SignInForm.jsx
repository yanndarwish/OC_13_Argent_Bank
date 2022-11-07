import { Form } from "react-router-dom"
import { useGetAuthMutation } from "../../redux/services/api"

const SignInForm = () => {
	const [getAuthed, res] = useGetAuthMutation()

	const errCheck = (errorType) => res.isError && res.error.status === errorType
	const fieldCheck = (field) =>
		errCheck(400) && res.error.data.message.includes(field)

	const handleSubmit = async (e) => {
		e.preventDefault()
		const elements = e.target.elements
		const payload = {
			email: elements.username.value,
			password: elements.password.value,
		}
		await getAuthed(payload)
	}
	return (
		<Form onSubmit={handleSubmit}>
			<div className="input-wrapper">
				<label htmlFor="username">Username</label>
				<input
					type="text"
					id="username"
					defaultValue="tony@stark.com"
					className={fieldCheck("User") ? "input-error" : ""}
					required
				/>
				{fieldCheck("User") && (
					<span className="error-message">{res.error.data.message}</span>
				)}
			</div>
			<div className="input-wrapper">
				<label htmlFor="password">Password</label>
				<input
					type="password"
					id="password"
					defaultValue="password123"
					className={fieldCheck("Password") ? "input-error" : ""}
					required
				/>
				{fieldCheck("Password") && (
					<span className="error-message">{res.error.data.message}</span>
				)}
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
