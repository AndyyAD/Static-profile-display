export default function Navbar({ loggedIn, onLogout }) {
	return (
		<>
			<nav className="navbar">
				<div className="logo">
					<div className="circle">
						<p className="circleText"> ttt </p>
					</div>
					<hr className="logoHr" />
					<p className="logoName"> Stories </p>
				</div>
				<div>
					{loggedIn && (
						<button onClick={onLogout} className="logBTN">Logout</button>
					)}
				</div>
			</nav>
		</>
	)
}