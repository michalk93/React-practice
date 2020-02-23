import './CharComponent.css';
import React from 'react';

const charComponent = (props) => {
    return (
        <div onClick={props.clicked} className="char-component">
            {props.textChar}
        </div>
    )
};

export default charComponent;