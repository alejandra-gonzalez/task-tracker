import React, { Component } from 'react';
import './card.css';

export default class Card extends Component{
    constructor(props) {
        super(props);
        this.state = {
            cardTitle: props.cardTitle,
            displayActions: false
        }
        this.renderActions=this.renderActions.bind(this);
    }

    renderActions(){
        this.setState({
            displayActions: !this.state.displayActions
        });
    }

    render() {
        return (
            <div className="card">
                <div>{this.state.cardTitle} 
                <button className="btn edit-btn" onClick={this.renderActions}><img src="https://img.icons8.com/material-sharp/24/000000/pencil--v2.png"/></button>
                {(this.state.displayActions === true) && <ul>
                    <button className="btn action-btn" onClick={() => this.props.onDelete(this.props.cardTitle)}>Delete Card</button>
                    <button className="btn action-btn">Edit Title</button>
                    </ul>}

                </div>
            </div>
        ); 
    }  
}