import React from 'react';

const Button = props => {
    const { selected } = props;

    return <button id={ props.id } className={ selected ? 'selected' : '' } onClick={ props.onClick }>
        <span className="buttonText">{ props.id }</span>
        <span className="buttonAmount">{ props.amount }</span>
    </button>;
}

export default Button;
