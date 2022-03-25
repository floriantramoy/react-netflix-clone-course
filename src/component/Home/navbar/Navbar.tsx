import './Navbar.css';
import Logo from '../../Layout/logo/Logo';
import React from "react";
import Login from "../../Layout/login/Login";


const Navbar = () => {
    return (
        <div className="navigationContainer">
            <nav className="home-nav">
                <Logo/>
                <Login/>
            </nav>
        </div>
    )
}
export default Navbar;