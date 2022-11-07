import { NavLink } from "react-router-dom"
import logo from "../../assets/img/argentBankLogo.png"
import { useSelector, useDispatch } from "react-redux"
import { logout } from "../../redux/features/login/loginSlice"
import { useGetProfileQuery } from "../../redux/services/api"

const Header = () => {
	const auth = useSelector((state) => state.login.token)
	const { data } = useGetProfileQuery()
	const dispatch = useDispatch()

	const handleLogout = () => {
		dispatch(logout())
	}

	return (
		<nav className="main-nav">
			<NavLink to="/" className="main-nav-logo">
				<img
					className="main-nav-logo-image"
					src={logo}
					alt="Argent Bank Logo"
				/>
				<h1 className="sr-only">Argent Bank</h1>
			</NavLink>
			<div>
				{(auth && (
					<>
						<NavLink to="/login" className="main-nav-item">
							<i className="fa fa-user-circle nav-icon"></i>
							{data && data.body.firstName}
						</NavLink>
						<NavLink
							to="/"
							className="main-nav-item"
							onClick={handleLogout}
							replace
						>
							<i className="fa fa-sign-out nav-icon"></i>
							Sign out
						</NavLink>
					</>
				)) || (
					<NavLink to="/login" className="main-nav-item">
						<i className="fa fa-user-circle nav-icon"></i>
						Sign In
					</NavLink>
				)}
			</div>
		</nav>
	)
}

export default Header
