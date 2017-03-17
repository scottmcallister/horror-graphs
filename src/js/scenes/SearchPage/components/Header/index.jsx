import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as searchActionCreators from '../../actions';

class Header extends Component{
    static propTypes = {
        actions: PropTypes.object,
        keywords: PropTypes.string,
        yearMin: PropTypes.number,
        yearMax: PropTypes.number,
        criticMin: PropTypes.number,
        criticMax: PropTypes.number,
        userMin: PropTypes.number,
        userMax: PropTypes.number,
    }

    render() {
        const {
            actions,
            keywords,
            yearMin,
            yearMax,
            criticMin,
            criticMax,
            userMin,
            userMax,
        } = this.props;
        return (
          <div>
            <h1>Horror Movie Search</h1>
            <div className="search-box">
              <input
                id="search-input"
                onChange={(e) => actions.updateKeywords(e.target.value)}
                placeholder="Search by title">
              </input>
              <button onClick={() =>
                    actions.getMovies({
                        keywords,
                        yearMin,
                        yearMax,
                        criticMin,
                        criticMax,
                        userMin,
                        userMax,
                    })}>Search</button>
            </div>
          </div>
        );
    }
}

export default connect(
    (state) => ({
        keywords: state.keywords,
        yearMin: state.yearMin,
        yearMax: state.yearMax,
        criticMin: state.criticMin,
        criticMax: state.criticMax,
        userMin: state.userMin,
        userMax: state.userMax,
    }),
    (dispatch) => ({
        actions: bindActionCreators(
            Object.assign(
            {},
            searchActionCreators),
            dispatch
        ),
    }),
)(Header);
