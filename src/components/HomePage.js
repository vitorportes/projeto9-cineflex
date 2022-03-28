import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Movie from "./Movie";

import Loading from './../assets/loading.gif'


function HomePage() {
    const URL_API_MOVIES = "https://mock-api.driven.com.br/api/v5/cineflex/movies"
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const promise = axios.get(URL_API_MOVIES)
        promise.then((response) => {
            const {data} = response;
            setMovies(data)
        })
        promise.catch((error) => {console.log(error.response);})
    },[])

    return movies.length !== 0 ? 
    (
        <HomeScreen>
            <h1>Selecione o filme</h1>
            <div className='movies-list'>
                {movies.map((movie) => <Movie key={movie.id} posterURL={movie.posterURL} idFilme={movie.id}/>)} 
            </div>
        </HomeScreen>
    ) : <LoadingScreen>
            <img src={Loading} alt="loading" />
        </LoadingScreen>
}

export default HomePage;

const HomeScreen = styled.div`
    h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        color: #293845;
        text-align: center;
        margin-top: 108px;
        margin-bottom: 33px;
    }

    .movies-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }

    .background-movie {
        width: 145px;
        height: 209px;
        /* left: 30px;
        top: 169px; */
        background: #ffffff;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 11px;
    }

    img {
        width: 129px;
        height: 193px;
    }
`

const LoadingScreen = styled.div`

    //centralizar loading.gif
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -100px 0 0 -100px;

    img {
    width: 200px;
    height:200px;
    }
`