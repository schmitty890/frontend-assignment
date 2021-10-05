import React, { Component } from "react";
import {
  getLatestMovies,
  getMovieById,
  getMovieBySearchTerm,
} from "../api/moviecalls";

const { Provider, Consumer } = React.createContext();

class MovieProvider extends Component {
  /**
   * state to be shared by context across components
   */
  state = {
    nowPlaying: "",
    selectedMovieById: false,
    title: "",
  };

  componentDidMount() {
    this.fetchLatestMovies();
  }

  /**
   * calls on the api call that gets all the latest movies from the movie db api, awaits the response, and sets the response to the state
   */
  fetchLatestMovies = async () => {
    const latestMovieData = await getLatestMovies();
    this.setState({ nowPlaying: latestMovieData.data });
  };

  /**
   * calls on the api call that gets a specific movie by movie id from the movie db api, awaits the response, and sets the response to the state
   * @param {*} id - movie id
   */
  fetchMovieById = async (id) => {
    const movieByIdData = await getMovieById(id);
    this.setState({ selectedMovieById: movieByIdData.data });
  };

  /**
   * calls on the api call that gets movies by search term, awaits the response and sets the response to the state
   * @param {*} searchTerm - search term from input field
   */
  fetchMovieBySearch = async (searchTerm) => {
    const movieBySearchTermData = await getMovieBySearchTerm(searchTerm);
    this.setState({ nowPlaying: movieBySearchTermData.data });
  };

  render() {
    return (
      <Provider
        value={{
          test: this.state.test,
          nowPlaying: this.state.nowPlaying,
          selectedMovieById: this.state.selectedMovieById,
          fetchMovieById: this.fetchMovieById,
          fetchMovieBySearch: this.fetchMovieBySearch,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { MovieProvider, Consumer as MovieConsumer };
