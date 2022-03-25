import React, {useEffect, useState, Fragment} from 'react';
import axios, {AxiosResponse} from 'axios';
import './../Movie.css'


const BASE_URL = 'https://api.themoviedb.org/3/';

interface Movie {
    poster_path: string;
    id: number;
    backdrop_path: string;

}

const defaultMovie: Movie[] = [];


const Comedy = () => {
    const url = 'https://image.tmdb.org/t/p/original/';
    const [messages, setMovie]: [Movie[], (messages: Movie[]) => void] = React.useState(defaultMovie);

    React.useEffect(() => {
        axios
            .get<Movie[]>("https://api.themoviedb.org/3/discover/movie?api_key="+process.env.REACT_APP_API_KEY+"&language=fr&with_genres=14")
            .then((response: AxiosResponse) => {
                setMovie(response.data.results);
                console.log(response.data.results);
            })
    }, []);
    return (
        <div>
            <h5>Comédie</h5>
            <div>
                {messages.map((message) => (
                    <div className="movie" key={message.id}>
                        <img src={url + message.poster_path} alt=""/>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default Comedy;