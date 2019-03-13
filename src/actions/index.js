import { FETCH_MOVIES } from './types';

export function fetchMovies(movieTitle) {
    movieTitle = movieTitle.split(' ').join('+')

    const request = fetch(`https://api.themoviedb.org/3/search/movie?api_key=86316e13477c0ca3549366b8391490e0&query=${movieTitle}`)
    
    return {
        type: FETCH_MOVIES,
        payload: request
    }
  };