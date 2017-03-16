import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as searchActionCreators from '../actions';

class SearchResults extends Component{

    static propTypes = {
        actions: PropTypes.object,
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
