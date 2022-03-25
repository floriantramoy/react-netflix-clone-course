import './Form.css';
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";
import React from "react";
import style from "../../pages/Login/Login.module.css";
import TextField from "@mui/material/TextField";

const Form = () => {

    return (
        <form className={style.form}>
            <h1>S'identifier</h1><br/>
            <div className='mail'>
                <TextField className="formInput" label="E-mail ou numéro de téléphone" variant="filled"/>
            </div>
            <div className='password'>
            <TextField className="formInput" type="password" id="filled-password-input" label="Mot de passe" variant="filled"/>
            </div>
                <div className="formButton">
                    <Link to="/account">
                        <Button className='identification' variant='contained' color={'error'}>S'identifier</Button>
                    </Link>
                </div>

        </form>
    )
}
export default Form;