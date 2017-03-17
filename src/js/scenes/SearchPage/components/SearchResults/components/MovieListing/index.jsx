import React, { Component, PropTypes } from 'react';

const getPosterUrl = (name, year) => {
    const fixed_name = name.replace(/([^\s\w]|_)+/g, '')
        .replace(/\s/g, '_')
        .toLowerCase();
    const url = `/static/images/${fixed_name}${year}.png`;
    return url;
};

class MovieListing extends Component {
    static propTypes = {
        country: PropTypes.string.isRequired,
        critic_score: PropTypes.number.isRequired,
        director: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        rt_url: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        user_score: PropTypes.number.isRequired,
        year: PropTypes.number.isRequired,
    }

    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
        };
    }

    render() {
        const { hasError } = this.state;
        return (
            <div className="col-sm-4">
                <div className="thumbnail">
                    <img
                        src={hasError ? '/static/images/image-404.png' : getPosterUrl(this.props.title, this.props.year)}
                        alt={this.props.title}
                        onError={() => this.setState({ hasError: true })}
                    />
                    <div className="caption">
                        <h3>{this.props.title} ({this.props.year})</h3>
                        <div className="row">
                            <div className="col-xs-6">
                                <label>Critic Score</label>
                            </div>
                            <div className="col-xs-6">
                                <label>User Score</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-6">
                                <label className="rt-score">{this.props.critic_score}%</label>
                            </div>
                            <div className="col-xs-6">
                                <label className="rt-score">{this.props.user_score}%</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>);
    }
}

export default MovieListing;
