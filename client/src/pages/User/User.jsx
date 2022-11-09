import { useSelector } from "react-redux"
import { useState } from "react"
import { Navigate } from "react-router-dom"
import Account from "../../components/Account/Account"
import { useGetProfileQuery, useUpdateProfileMutation } from "../../redux/services/api"

const User = () => {
	const auth = useSelector((state) => state.login.token)
	const { data, isError, error } = useGetProfileQuery()
    const [updateProfile] = useUpdateProfileMutation()
	const [isEditing, setIsEditing] = useState(false)
	let accounts = [
		{
			title: "Argent Bank Checking (x8349)",
			amount: 2082.7,
		},
		{
			title: "Argent Bank Savings (x6712)",
			amount: 10928.42,
		},
		{
			title: "Argent Bank Credit Card (x8349)",
			amount: 184.3,
		},
	]

	const errCheck = (errorType) => isError && error.status === errorType

	const handleEdit = async (e) => {
		e.preventDefault()
		const elements = e.target.elements
		const payload = {
			firstName: elements.firstName.value,
			lastName: elements.lastName.value,
		}
		await updateProfile(payload)
		toggleEditMode()
	}

	const toggleEditMode = () => {
		setIsEditing(!isEditing)
	}

	const EditSection = () => {
		return (
			<section>
				<h2 className="sr-only">Edit Section</h2>
				<form onSubmit={handleEdit} className="edit-form">
					<div className="edit-input-container">
						<input
							type="text"
							id="firstName"
							className="edit-input"
							placeholder={data && data.body.firstName}
						/>
						<input
							type="text"
							id="lastName"
							className="edit-input"
							placeholder={data && data.body.lastName}
						/>
					</div>
					<div className="edit-button-container">
						<button className="edit-button" type="submit">
							Save
						</button>
						<button className="edit-button" onClick={() => toggleEditMode()}>
							Cancel
						</button>
					</div>
				</form>
			</section>
		)
	}

	if (!auth) {
		return <Navigate to="/login" />
	}

	return (
		<main className="main user-main bg-dark">
			<div className="header">
				<h1>
					Welcome back
					<br />
					{data && `${data.body.firstName} ${data.body.lastName}`}!
				</h1>
				{isError &&
					(errCheck(400) ? (
						<div className="error-message">{error.data.message}</div>
					) : (
						<div className="error-message">{error.error}</div>
					))}
				{isEditing ? (
					<EditSection />
				) : (
					<button className="edit-button" onClick={() => toggleEditMode()}>
						Edit Name
					</button>
				)}
			</div>
			<h2 className="sr-only">Accounts</h2>
			{accounts.map((account, i) => (
				<Account key={i} account={account} />
			))}
		</main>
	)
}

export default User
