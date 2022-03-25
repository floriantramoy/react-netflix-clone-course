import React, {Component} from 'react';
import style from './Login.module.css';
import Form from "../../component/Login/Form";
import Logo from "../../component/Layout/logo/Logo";

class Login extends Component {
    render() {
        return (
            <div className={style.image}>
                <div className={style.overlay}>
                    <div className={style.bandeau}>
                        <Logo />
                    </div>
                    <Form />
                </div>
            </div>
        )
    }
}

export default Login;