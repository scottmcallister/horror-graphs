import { UPDATE_MOVIES } from './actions';

const initialState = {
    filters: {},
    movies: []
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
    case UPDATE_MOVIES:
        return Object.assign({}, state, {
            movies: action.movies,
        });
    default:
        return state;
    }
};

export default reducer;
