import { combineReducers } from "redux";
import MoviesReducer from "./reducers-movies";


const rootReducer = combineReducers({
  movies: MoviesReducer,
});

export default rootReducer;