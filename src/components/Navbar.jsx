import React from 'react'
import '../css/Navbar.css'
import { FaRegBell } from "react-icons/fa";
import prof from '../assets/prof.JPG'

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className="logo">

            </div>
            <div className="navbar-right">
                <p><FaRegBell /></p>
                <div className="profile">
                    <div className="profile-image">
                        <img src={prof} />
                    </div>
                    <div className="profile-box">
                        <h4>Hi, Adam Rifsal</h4>
                        <p>Welcome back</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar