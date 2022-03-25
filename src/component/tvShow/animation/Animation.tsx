import React, {useEffect, useState, Fragment} from 'react';
import axios, {AxiosResponse} from 'axios';
import './../Movie.css'


const BASE_URL = 'https://api.themoviedb.org/3/';

interface TVShow {
    poster_path: string;
    id: number;
    backdrop_path: string;

}

const defaultMovie: TVShow[] = [];


const Animation = () => {
    const url = 'https://image.tmdb.org/t/p/original/';
    const [messages, setTVShow]: [TVShow[], (messages: TVShow[]) => void] = React.useState(defaultMovie);

    React.useEffect(() => {
        axios
            .get<TVShow[]>("https://api.themoviedb.org/3/discover/tv?api_key="+process.env.REACT_APP_API_KEY+"&language=fr&with_genres=16")
            .then((response: AxiosResponse) => {
                setTVShow(response.data.results);
                console.log(response.data.results);
            })
    }, []);
    return (
        <div>
            <h5>Séries d'animation</h5>
            <div>
                {messages.map((message) => (
                    <div className="show" key={message.id}>
                        <img src={url + message.poster_path} alt=""/>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default Animation;