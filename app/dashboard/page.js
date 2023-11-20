"use client"

import { useState } from 'react';
import Navbar from '../component/Navbar';
import Profile from './Profile';
import Post from './Post'

export default function Home() {
    const [loggedIn, setLoggedIn] = useState(true);

    const handleLogout = () => {
        setLoggedIn(false);
        window.location.href = '/';
    };

    return (
        <>
            <Navbar loggedIn={loggedIn} onLogout={handleLogout} />
            <Profile/>
            <Post/>
            <p className='ending'>Made by Ashish Deb</p>
        </>
    )
}
