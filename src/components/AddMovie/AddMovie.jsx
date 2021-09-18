import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function AddMovie () {
    const dispatch= useDispatch();
    const [movieTitle, setMovieTitle] = useState('');
    const [moviePoster, setMoviePoster] = useState('');
    const [movieDiscription, setMovieDiscription] = useState('');
    const history = useHistory();
const onSubmit = (event) => {
    
}

    const pageChange = (event) => {
        history.push('/')
    }
    return(
        <>
        <h2>Feel free to add your own movies!</h2>
        <form >
            <input onChange={(event)=> setMovieTitle(event.target.value)} type="text" placeholder="Enter a Movie Title!" value={movieTitle}></input>
            <input onChange={(event)=> setMoviePoster(event.target.value)} type="text" placeholder="Enter the Movie's Poster!" value={moviePoster}></input>
            <input onChange={(event)=> setMovieDiscription(event.target.value)} type="text" placeholder="Add a discription!" value={movieDiscription}></input>
            <select onChange={(event) => handleOnChange(event.target.value, fav.id)} value={fav.category_id}>
                                {allCategories.map((cat, i) => <option key={i} value={cat.id}>
                                {cat.name}
                                </option>)}
            </select>
            <button type="submit" value="Submit">Add</button>
        </form>
        <button onClick={(pageChange)}>Cancel</button>
        </>
    )
}


export default AddMovie;