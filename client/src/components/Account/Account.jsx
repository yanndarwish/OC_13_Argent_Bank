const Account = (account) => {
    const item = account.account

    // create a formatting function to format the amount before injecting in render
	return (
		<section className="account">
			<div className="account-content-wrapper">
				<h3 className="account-title">{item.title}</h3>
				<p className="account-amount">${item.amount}</p>
				<p className="account-amount-description">Available Balance</p>
			</div>
			<div className="account-content-wrapper cta">
				<button className="transaction-button">View transactions</button>
			</div>
		</section>
	)
}

export default Account