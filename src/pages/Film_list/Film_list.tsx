import React, {Component} from "react";
import Logo from "../../component/Layout/logo/Logo";
import Popular from "../../component/movie/popular/Popular";
import Comedy from "../../component/movie/comedy/Comedy";
import Horror from "../../component/movie/horror/Horror";
import style from "../Login/Login.module.css";
import Action from "../../component/movie/action/Action";

class Film_list extends Component {
    render() {
        return (
            <>
                <div className={style.bandeau}>
                    <Logo/>
                </div>
                <Popular/>
                <Comedy/>
                <Horror/>
                <Action/>
        </>

        )
    }
}

export default Film_list;