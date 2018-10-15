import React from 'react';

const Button = props => {
    return (
        <button id={ props.id } className={ props.className } onClick={ props.onClick }>
            <span className="buttonText">{ props.id }</span>
            <span className="buttonAmount">{ props.amount }</span>
        </button>
    )
}

export default Button;
