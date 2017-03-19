import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as searchActionCreators from '../../../../actions';

class Pagination extends Component{

    static propTypes = {
        page: PropTypes.number.isRequired,
        hasNext: PropTypes.bool.isRequired,
        actions: PropTypes.object.isRequired,
    }

    getNext() {
        const {actions} = this.props;
        actions.nextPage();
        actions.getMovies();
        window.scrollTo(0, 0);
    }

    getPrev() {
        const {actions} = this.props;
        actions.prevPage();
        actions.getMovies();
        window.scrollTo(0, 0);
    }

    render() {
        const { page, hasNext } = this.props;
        return (<div className="pagination">
            { page !== 1 ? <button onClick={() => this.getPrev()}>Back</button> : '' }
            <span>Page {page}</span>
            { hasNext ? <button onClick={() => this.getNext()}>Next</button> : '' }
        </div>);
    }

}

export default connect(
    (state) => ({
        page: state.page,
        hasNext: state.hasNext,
    }),
    (dispatch) => ({
        actions: bindActionCreators(
            Object.assign(
            {},
            searchActionCreators),
            dispatch
        ),
    }),
)(Pagination);
