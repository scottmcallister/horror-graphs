import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MovieListing from './components/MovieListing';
import Filters from './components/Filters';
import Spinner from './components/Spinner';
import Pagination from './components/Pagination';
import * as searchActionCreators from '../../actions';

import _ from 'lodash';

class SearchResults extends Component{

    static propTypes = {
        movies: PropTypes.array,
        actions: PropTypes.object,
        fetching: PropTypes.bool.isRequired,
    }

    componentDidMount() {
        const { actions } = this.props;
        actions.getMovies();
    }

    renderMovies(movies, fetching) {
        if(movies.length === 0 && !fetching) {
            return (<p>No results</p>);
        }
        const movieListings = movies.map((movie, index) => (
            <MovieListing
                key={index}
                country={movie.country}
                critic_score={movie.critic_score}
                director={movie.director}
                poster={movie.poster}
                rt_url={movie.rt_url}
                title={movie.title}
                user_score={movie.user_score}
                year={movie.year}
            />
        ));
        const movieRows = _.chunk(movieListings, 3);
        return movieRows.map((row, index) =>
            (<div className="row" key={index}>{row}</div>)
        );
    }

    render() {
        const { movies, fetching } = this.props;
        return (
            <div className="container">
                <div className="row">
                    <Filters />
                    <div className="col-md-9">
                      {this.renderMovies(movies, fetching)}
                      {movies.length > 0 && !fetching ? <Pagination /> : ''}
                      {fetching ? <Spinner /> : null}
                    </div>
                </div>
            </div>

        );
    }
}

export default connect(
    (state) => ({
        movies: state.movies,
        fetching: state.fetching,
    }),
    (dispatch) => ({
        actions: bindActionCreators(
            Object.assign(
            {},
            searchActionCreators),
            dispatch
        ),
    })
)(SearchResults);
