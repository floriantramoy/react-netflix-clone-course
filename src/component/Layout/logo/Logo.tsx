import './Logo.css';
import logo from '../../../Assets/logo.png';
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";
import React from "react";
import Login from "../login/Login";

const Logo = () => {

    return (
            <img className="logo" src={logo} />
    )
}

export default Logo;