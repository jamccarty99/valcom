import React from 'react'
// import { fetchMovies } from '../actions'

class Movies extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            movieTitle: '',
            movies: []
        }

        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSearchChange(event) {
        this.setState({movieTitle: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=86316e13477c0ca3549366b8391490e0&query=${this.state.movieTitle}`)
        .then(results => {
            return results.json();
        }).then(data => {
            let movies = [];
            for (let i = 0; i < 11; i++) {
                movies.push(data.results[i]);
            this.setState({movies: movies})
            }
        })
    }

    render() {
        return (
            <div className="movieList">
                <form className="form-inline input-group input-group-lg my-2 my-sm-0 d-flex justify-content-center">
                    <input className="form-control-sm" height='10px' width='25px' type="search" placeholder="Search for Movies" aria-label="Search" value={this.state.movieTitle} onChange={this.handleSearchChange}/>
                        <button className="btn-sm btn-success text-white " type="submit" onClick={this.handleSubmit}>SEARCH</button>
                </form>
                <table className="table">
                    <thead className="thead-dark">
                        <tr className="table-bordered">
                            <th scope="col"></th>
                            <th scope="col">Title</th>
                            <th scope="col">Released</th>
                            <th scope="col">Overview</th>
                            <th scope="col">Votes</th>
                            <th scope="col">Rating</th>
                        </tr>
                    </thead>
                    <tbody className="table-bordered">
                        { 
                            this.state.movies.map((movie, i) => {
                                return (
                                    <tr key={i}>
                                        <th scope="row">{i}</th>
                                        <td>{movie.original_title}</td>
                                        <td>{movie.release_date}</td>
                                        <td>{movie.overview}</td>
                                        <td>{movie.vote_count}</td>
                                        <td>{movie.vote_average}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            )
        }
    }

export default Movies;