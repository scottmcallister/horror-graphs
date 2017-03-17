import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as searchActionCreators from '../../actions';

class Header extends Component{
    static propTypes = {
        actions: PropTypes.object,
    }

    componentDidMount() {
        const { actions } = this.props;
        actions.getMovies();
    }

    render() {
        const { actions } = this.props;
        return (
          <div>
            <h1>Horror Movie Search</h1>
            <div className="search-box">
              <input
                id="search-input"
                onKeyPress={(e) => {
                    if(e.key == 'Enter'){
                        actions.getMovies();
                    }
                }}
                onChange={(e) => actions.updateKeywords(e.target.value)}
                placeholder="Search by title">
              </input>
              <button onClick={() =>
                    actions.getMovies()}>Search</button>
            </div>
          </div>
        );
    }
}

export default connect(
    (state) => state,
    (dispatch) => ({
        actions: bindActionCreators(
            Object.assign(
            {},
            searchActionCreators),
            dispatch
        ),
    }),
)(Header);
