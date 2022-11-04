import Account from "../../components/Account/Account"

const User = () => {
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

	return (
		<main className="main user-main bg-dark">
			<div className="header">
				<h1>
					Welcome back
					<br />
					Tony Jarvis!
				</h1>
				<button className="edit-button">Edit Name</button>
			</div>
			<h2 className="sr-only">Accounts</h2>
			{accounts.map((account, i) => 
                <Account key={i} account={account} />
            )}
		</main>
	)
}

export default User
