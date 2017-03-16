import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class SearchResults extends Component{

    static propTypes = {
        movies: PropTypes.array,
    }

    render() {
        return (
          <div>
            <p className="info">List of movies goes here</p>
          </div>
        );
    }
}

export default connect(
    (state) => ({
        movies: state.movies,
    })
)(SearchResults);
