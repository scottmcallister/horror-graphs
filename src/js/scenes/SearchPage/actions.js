/* eslint no-console: 0 */
export const UPDATE_MOVIES = 'UPDATE_MOVIES';

/**
 * updateMovies - updates list of movies to display to the user
 * @param  {Array} newMovies - list of movies in search results
 * @return {Object} Action
 */
export function updateMovies(newMovies) {
    return {
        type: UPDATE_MOVIES,
        movies: newMovies,
    };
}

/**
 * getMovies - fetches a list of movies from the API
 * @param  {Object} params - query params to send in the API request
 * @return {Object} dispatches a series of actions
 */
export const getMovies = () =>
    (dispatch) => {
        return fetch('/api/movie')
            .then(response => response.json())
            .then((json) => dispatch(updateMovies(json.movies)))
            .catch((err) => console.log(err));
    };
