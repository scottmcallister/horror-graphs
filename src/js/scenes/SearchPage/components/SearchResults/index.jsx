import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import MovieListing from './components/MovieListing';

class SearchResults extends Component{

    static propTypes = {
        movies: PropTypes.array,
    }

    renderMovies(movies) {
        return movies.map((movie, index) => (
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
    }

    render() {
        const { movies } = this.props;
        return (
          <div>
            {this.renderMovies(movies)}
          </div>
        );
    }
}

export default connect(
    (state) => ({
        movies: state.movies,
    })
)(SearchResults);
