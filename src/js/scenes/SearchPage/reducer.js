import {
    UPDATE_MOVIES,
    UPDATE_KEYWORDS,
    UPDATE_USER_MIN,
    UPDATE_USER_MAX,
    UPDATE_YEAR_MIN,
    UPDATE_YEAR_MAX,
    UPDATE_CRITIC_MIN,
    UPDATE_CRITIC_MAX,
    UPDATE_FETCHING,
    NEXT_PAGE,
    PREV_PAGE,
    UPDATE_HAS_NEXT,
    RESET_PAGINATION,
} from './actions';

const initialState = {
    keywords: '',
    director: '',
    yearMin: 0,
    yearMax: 3000,
    criticMin: 0,
    criticMax: 99,
    userMin: 0,
    userMax: 99,
    country: '',
    page: 1,
    hasNext: true,
    fetching: false,
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
        case UPDATE_FETCHING:
            return Object.assign({}, state, {
                fetching: action.fetching,
            });
        case NEXT_PAGE:{
            const newPageNum = state.page + 1;
            return Object.assign({}, state, {
                page: newPageNum,
            });
        }
        case PREV_PAGE:{
            const newPageNum = state.page - 1;
            return Object.assign({}, state, {
                page: newPageNum,
            });
        }
        case RESET_PAGINATION:
            return Object.assign({}, state, {
                page: 1,
            });
        case UPDATE_HAS_NEXT:
            return Object.assign({}, state, {
                hasNext: action.hasNext,
            });
        default:
            return state;
    }
};

export default reducer;
