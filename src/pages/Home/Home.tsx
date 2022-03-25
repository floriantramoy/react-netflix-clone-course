import React, {Component} from 'react';
import style from './Home.module.css';
import SearchBar from '../../component/Home/searchbar/SearchBar';
import Text from '../../component/Home/text/Text';
import Navbar from '../../component/Home/navbar/Navbar';

class Home extends Component {
    render() {
        return (
            <div className={style.image}>
                <div className={style.overlay}>
                    <div className={style.bandeau}>
                        <Navbar />
                    </div>

                    <div className={style.mainContainer}>
                        <Text />
                        <SearchBar />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;