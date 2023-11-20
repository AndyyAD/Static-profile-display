"use client"

import Navbar from './component/Navbar'
import { useState } from 'react';

export default function Home() {
	const [loggedIn, setLoggedIn] = useState(false);

	const handleLogin = () => {
		setLoggedIn(true);
		window.location.href = '/dashboard';
	};

	const handleLogout = () => {
		setLoggedIn(false);
	};

	return (
		<>
			<Navbar loggedIn={loggedIn} onLogout={handleLogout} />
			<div className='login'>
				<h1>Login</h1>
				<p>You are already logged in. Click below to go to dashboard. </p>
				<button onClick={handleLogin} className='logBTN'> Login </button>
			</div>
		</>
	)
}
