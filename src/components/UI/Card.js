/* eslint-disable no-unused-vars */
import React from 'react';
import './Card.css';

const Card = (props) =>
{
    const classes = props.className;
return(
    <div className={classes}>{ props.children }</div>
)
}

export default Card;