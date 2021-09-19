import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function Description (){
    const history = useHistory();
    let genres = useSelector(store => store.genres);
    console.log('THIS IS ALL THE MOVEIS AND GENRES:', genres)
    
    const pageChange = () => {
        history.push('/');
    }
        

    let params = useParams();
    console.log(params);

    let {movieId} = params;
    let movie = genres.find(movie => movie.id === Number(movieId));
    console.log('Found this movie:', movie);

    if (!movie) {
        return <h2>Invalid Movie ID</h2>
    }

    
    return(
        <>
        <div>
        <h2>{movie?.title}</h2>
        <img src={movie?.poster}/>
        <p>Genre: {(movie?.genres).join(', ')}</p>
        <p>{movie?.description}</p>
        <button onClick={pageChange}>Cancel</button>
        </div>
        </>
    )
}

export default Description;