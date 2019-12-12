import React, { Component } from 'react';
import './card.css';

export default class Card extends Component{
    constructor(props) {
        super(props);
        this.state = {
            cardTitle: props.cardTitle,
            actions: ['Delete Card', 'Edit Title'],
            displayActions: false
        }
        this.renderActions=this.renderActions.bind(this);
    }

    renderActions(){
        console.log(this.state.cardTitle);
        this.setState({
            displayActions: !this.state.displayActions
        });
    }

    render() {
        return (
            <div className="card">
                <div>{this.state.cardTitle} 
                <button className="btn edit-btn" onClick={this.renderActions}><img src="https://img.icons8.com/material-sharp/24/000000/pencil--v2.png"/></button>
                {(this.state.displayActions === true) && <ul>{this.state.actions.map(action => <button className="btn action-btn" key={action}>{action}</button>)}</ul>}

                </div>
            </div>
        ); 
    }  
}