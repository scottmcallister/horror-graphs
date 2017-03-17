import {
    UPDATE_MOVIES,
    UPDATE_KEYWORDS,
    UPDATE_USER_MIN,
    UPDATE_USER_MAX,
    UPDATE_YEAR_MIN,
    UPDATE_YEAR_MAX,
    UPDATE_CRITIC_MIN,
    UPDATE_CRITIC_MAX,
} from './actions';

const initialState = {
    keywords: '',
    director: '',
    yearMin: 0,
    yearMax: 3000,
    criticMin: 0,
    criticMax: 99,
    userMin: 0,
    userMax: 101,
    country: '',
    page: 1,
    movies: []
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_MOVIES:
            return Object.assign({}, state, {
                movies: action.movies,
            });
        case UPDATE_KEYWORDS:
            return Object.assign({}, state, {
                keywords: action.keywords,
            });
        case UPDATE_USER_MIN:
            return Object.assign({}, state, {
                userMin: action.userMin,
            });
        case UPDATE_USER_MAX:
            return Object.assign({}, state, {
                userMax: action.userMax,
            });
        case UPDATE_YEAR_MIN:
            return Object.assign({}, state, {
                yearMin: action.yearMin,
            });
        case UPDATE_YEAR_MAX:
            return Object.assign({}, state, {
                yearMax: action.yearMax,
            });
        case UPDATE_CRITIC_MIN:
            return Object.assign({}, state, {
                criticMin: action.criticMin,
            });
        case UPDATE_CRITIC_MAX:
            return Object.assign({}, state, {
                criticMax: action.criticMax,
            });
        default:
            return state;
    }
};

export default reducer;
