import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Range, createSliderWithTooltip } from 'rc-slider';
import * as searchActionCreators from '../../../../actions';

const TooltipRange = createSliderWithTooltip(Range);

class Filters extends Component{
    static propTypes = {
        actions: PropTypes.object,
    }
    render() {
        const { actions } = this.props;
        return (
            <div className="col-md-3 filters">
                <h2>Filters</h2>
                <div>
                    <label>Year</label>
                    <TooltipRange
                        min={1960}
                        max={2017}
                        defaultValue={[1960, 2017]}
                        allowCross={false}
                        onAfterChange={(val) => {
                            actions.updateYearMin(val[0]);
                            actions.updateYearMax(val[1]);
                            actions.getMovies();
                        }} />
                    <label>Critic Score</label>
                    <TooltipRange
                        defaultValue={[0, 100]}
                        allowCross={false}
                        onAfterChange={(val) => {
                            actions.updateCriticMin(val[0]);
                            actions.updateCriticMax(val[1]);
                            actions.getMovies();
                        }} />
                    <label>User Score</label>
                    <TooltipRange
                        defaultValue={[0, 100]}
                        allowCross={false}
                        onAfterChange={(val) => {
                            actions.updateUserMin(val[0]);
                            actions.updateUserMax(val[1]);
                            actions.getMovies();
                        }} />
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
)(Filters);
