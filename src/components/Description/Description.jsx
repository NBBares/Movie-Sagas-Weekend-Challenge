import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function Description (){
    const history = useHistory();
    let allMovies = useSelector(store => store.allMovies);
    
    const pageChange = () => {
        history.push('/')

    let params = useParams();
    console.log(params);

    let {movieId} = params;
    let movie = allMovies.find(movie => movie.id === Number(movieId));
    console.log(`Found this movie: `, movie);

    if (!movie) {
        return <h2>Invalid Movie ID</h2>
    }

    }
    return(
        <>
        <h2>{movie?.title}</h2>
        <h3>{movie?.poster}</h3>
        <h3>{movie?.description}</h3>
        <button onClick={(pageChange)}>Cancel</button>
        </>
    )
}

export default Description;