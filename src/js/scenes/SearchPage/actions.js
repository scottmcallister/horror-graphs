/* eslint no-console: 0 */
import _ from 'lodash';

export const UPDATE_MOVIES = 'UPDATE_MOVIES';
export const UPDATE_KEYWORDS = 'UPDATE_KEYWORDS';
export const UPDATE_USER_MIN = 'UPDATE_USER_MIN';
export const UPDATE_USER_MAX = 'UPDATE_USER_MAX';
export const UPDATE_YEAR_MIN = 'UPDATE_YEAR_MIN';
export const UPDATE_YEAR_MAX = 'UPDATE_YEAR_MAX';
export const UPDATE_CRITIC_MIN = 'UPDATE_CRITIC_MIN';
export const UPDATE_CRITIC_MAX = 'UPDATE_CRITIC_MAX';

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
 * updateKeywords - update title keywords in search params
 * @param  {Array} newKeywords - new keywords
 * @return {Object} Action
 */
export function updateKeywords(newKeywords) {
    return {
        type: UPDATE_KEYWORDS,
        keywords: newKeywords,
    };
}

/**
 * updateUserMin - update user min value in search params
 * @param  {Number} userMin - new user min
 * @return {Object} Action
 */
export function updateUserMin(userMin) {
    return {
        type: UPDATE_USER_MIN,
        userMin,
    };
}

/**
 * updateUserMax - update user max value in search params
 * @param  {Number} userMax - new user min
 * @return {Object} Action
 */
export function updateUserMax(userMax) {
    return {
        type: UPDATE_USER_MAX,
        userMax,
    };
}

/**
 * updateCriticMin - update critic min value in search params
 * @param  {Number} criticMin - new critic min
 * @return {Object} Action
 */
export function updateCriticMin(criticMin) {
    return {
        type: UPDATE_CRITIC_MIN,
        criticMin,
    };
}

/**
 * updateCriticMax - update critic max value in search params
 * @param  {Number} criticMax - new critic max
 * @return {Object} Action
 */
export function updateCriticMax(criticMax) {
    return {
        type: UPDATE_CRITIC_MAX,
        criticMax,
    };
}

/**
 * updateYearMin - update Year min value in search params
 * @param  {Number} yearMin - new year min
 * @return {Object} Action
 */
export function updateYearMin(yearMin) {
    return {
        type: UPDATE_YEAR_MIN,
        yearMin,
    };
}

/**
 * updateYearMax - update year max value in search params
 * @param  {Number} yearMax - new year min
 * @return {Object} Action
 */
export function updateYearMax(yearMax) {
    return {
        type: UPDATE_YEAR_MAX,
        yearMax,
    };
}

/**
 * getMovies - fetches a list of movies from the API
 * @param  {Object} params - query params to send in the API request
 * @return {Object} dispatches a series of actions
 */
export const getMovies = (params) =>
    (dispatch) => {
        const queryParams = _.toPairs(params)
                            .map(pair => `${pair[0]}=${pair[1]}`)
                            .join('&');
        return fetch(`/api/movie?${queryParams}`)
            .then(response => response.json())
            .then((json) => dispatch(updateMovies(json.movies)))
            .catch((err) => console.log(err));
    };
