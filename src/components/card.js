import React, { Component } from 'react';
import './card.css';

function Card(props) {
    return (
        <div className="card">
            <div>{props.cardTitle}</div>
        </div>
    );   
}

export default Card;