import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function AddMovie () {
    const dispatch= useDispatch();
    const [inputMovie, setInputMovie] = useState({title:'', poster:'', description:'', genre_id:0});
    const history = useHistory();

    const onSubmit = (event) => {
        console.log("Movie inputs are,", inputMovie);
        event.preventDefault();

        dispatch({
            type: 'ADD_MOVIES',
            payload: 
            inputMovie

        })
         
        setInputMovie('');
        history.push('/');
    }

    const pageChange = () => {
        history.push('/')
    }
    
    return(
        <>
        <h2>Feel free to add your own movies!</h2>
        <form onSubmit={onSubmit}>
            <input onChange={(event)=> setInputMovie({...inputMovie, title: event.target.value})} type="text" placeholder="Enter a Movie Title!" value={inputMovie.title}></input>
            <input onChange={(event)=> setInputMovie({...inputMovie, poster: event.target.value})} type="text" placeholder="Enter the Movie's Poster!" value={inputMovie.poster}></input>
            <input onChange={(event)=> setInputMovie({...inputMovie, description: event.target.value})} type="text" placeholder="Add a description!" value={inputMovie.description}></input>
            <select onChange={(event) => setInputMovie({...inputMovie, genre_id: event.target.value})} value={inputMovie.genre_id}>
                                <option value={"1"}>Adventure</option>
                                <option value={"2"}>Animated</option>
                                <option value={"3"}>Biographical</option>
                                <option value={"4"}>Comedy</option>
                                <option value={"5"}>Comedy</option>
                                <option value={"6"}>Disaster</option>
                                <option value={"7"}>Drama</option>
                                <option value={"8"}>Epic</option>
                                <option value={"9"}>Fantasy</option>
                                <option value={"10"}>Musical</option>
                                <option value={"11"}>Romantic</option>
                                <option value={"12"}>Science Fiction</option>
                                <option value={"13"}>Space-Opera</option>
                                <option value={"14"}>Superhero</option>
            </select>
            <button type="submit" value="Submit">Save</button>
        </form>
        <button onClick={(pageChange)}>Cancel</button>
        </>
    )
}


export default AddMovie;