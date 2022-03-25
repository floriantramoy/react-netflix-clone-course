import './Login.css';
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";
import React from "react";

const Login = () => {

    return (
            <Link to="/login">
                <Button variant='contained'>S'identifier</Button>
            </Link>
    )
}

export default Login;