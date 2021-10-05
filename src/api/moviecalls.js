/**
 * API calls to interact with movie db api
 */
import axios from "axios";

/**
 *
 * @returns latest movies
 */
export const getLatestMovies = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_DOMAIN}/movie/now_playing?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&language=en-US&page=1`
  );
  return response;
};

/**
 *
 * @param {*} id - movie id
 * @returns movie data by movie id
 */
export const getMovieById = async (id) => {
  const endpoint = `${process.env.REACT_APP_API_DOMAIN}/movie/${id}?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&language=en-US`;
  const response = await axios.get(endpoint);
  return response;
};

/**
 *
 * @param {*} searchTerm - movie search term from input form
 * @returns movies based on the search text entered
 */
export const getMovieBySearchTerm = async (searchTerm) => {
  const endpoint = `${process.env.REACT_APP_API_DOMAIN}/search/movie?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&language=en-US&page=1&query=${searchTerm}`;
  const response = await axios.get(endpoint);
  return response;
};
