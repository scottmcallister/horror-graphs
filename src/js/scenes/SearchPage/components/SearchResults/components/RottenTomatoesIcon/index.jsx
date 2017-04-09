import React from 'react';

const RottenTomatoesIcon = (props) => {
    const { rating, type } = props;
    let icon = '';
    if(rating >= 60){
        icon = type === 'critic' ? '/static/images/fresh.png' : '/static/images/popcorn.png';
    } else {
        icon = type === 'critic' ? '/static/images/splat.png' : '/static/images/badpopcorn.png';
    }
    return (
        <img className={'rt-icon'} src={icon} />
    );
};

export default RottenTomatoesIcon;
