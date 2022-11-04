import { formatAmount } from "../../utils/format"

const Account = (account) => {
    const item = account.account

	return (
		<section className="account">
			<div className="account-content-wrapper">
				<h3 className="account-title">{item.title}</h3>
				<p className="account-amount">${formatAmount(item.amount)}</p>
				<p className="account-amount-description">Available Balance</p>
			</div>
			<div className="account-content-wrapper cta">
				<button className="transaction-button">View transactions</button>
			</div>
		</section>
	)
}

export default Account