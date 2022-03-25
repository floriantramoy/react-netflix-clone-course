import './Account.css';
import account1 from '../../../Assets/account/0.png';
import account2 from '../../../Assets/account/1.png';
import newProfil from '../../../Assets/account/newProfil.png';


import React from "react";
import {Link} from "react-router-dom";
const Account = () => {

    return (
        <div className='accounts'>
            <div className='account'>
                <img src={account1} alt=""/>
                <p> Profil 1</p>
            </div>
            <div className='account'>
                <img src={account2} alt=""/>
                <p> Profil 2</p>
            </div>
            <div className='account'>
                <Link to={'/newProfil'}>
                    <img src={newProfil} alt=""/>
              </Link>
            </div>
        </div>
    )
}
export default Account;