import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function Description (){
    const history = useHistory();
    //grabs the information from the store
    let genres = useSelector(store => store.genres);
    console.log('THIS IS ALL THE MOVEIS AND GENRES:', genres)
    
    //calls in history to change pages
    const pageChange = () => {
        history.push('/');
    }
        
    //calls in params so we can tell which movie ID we have clicked on from the list
    let params = useParams();
    console.log(params);

    //assigns the prams to the id of the movie from the store in this way linking the two together
    let {movieId} = params;
    //finds the like things from prams and the store
    let movie = genres.find(movie => movie.id === Number(movieId));
    console.log('Found this movie:', movie);

    //checks to make sure a match was found above, if not displays this message instead of fully crashing page
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