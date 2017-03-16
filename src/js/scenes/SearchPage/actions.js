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
