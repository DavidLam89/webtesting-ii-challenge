import React from 'react';

const Display = props => {
    return (
        <div>
            <h3 data-testid="ball-count">Balls:{props.ball}</h3>
            <h3 data-testid="strike-count">Strikes:{props.strike}</h3>
        </div>
    );
}

export default Display;