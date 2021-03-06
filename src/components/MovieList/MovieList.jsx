import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom';
import {HashRouter as Router, NavLink} from 'react-router-dom';

//function that runs the movie list logic
function MovieList() {

    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    //calls the saga to fetch all movies
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    //calls the saga to fetch all movies and genres associated with them
    useEffect(() => {
        dispatch({ type: 'FETCH_GENRES' });
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <Router>
                <NavLink to="/addmovie">Add a Movie</NavLink>
            </Router>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img onClick={() => history.push(`/description/${movie.id}`)}src={movie.poster} alt={movie.title}  className="poster"/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;