import React, { Component } from 'react';
import './Whos_watching.css';
import Text from "../../component/Whos_Watching/text/Text";
import Logo from "../../component/Layout/logo/Logo";
import Account from "../../component/Whos_Watching/account/Account";
import {Link} from "react-router-dom";

class Whos_watching extends Component {
    render(){
        return (
            <div>
                <Logo />
                <div className="text">
                    <Text />
                </div>
                <Link to="/list">
                    <Account/>
                </Link>
            </div>
        )
    }
}

export default Whos_watching;