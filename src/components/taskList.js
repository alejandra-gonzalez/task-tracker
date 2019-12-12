import React, { Component } from 'react';
import './taskList.css';
import sampleBoard from '../sampleBoard.js';
import Card from './card.js';

export default class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            cards: [],
            addCard: false
        }
    }
    componentWillMount() {
        this.setState({
            title: sampleBoard.taskLists[0].title,
            cards: sampleBoard.taskLists[0].cards
        });
    }
    addCard = e => {
        e.preventDefault();
        this.setState({
            addCard: true
        });    
    }
    onEnter = e => {
        if(e.keyCode === 13 && e.shiftKey === false) {
            e.preventDefault();
            var title = e.target.value;
            let updatedCards = this.state.cards.concat([{cardTitle: title}]);
            this.setState({
                cards: updatedCards
            });
            this.setState({
                addCard: false
            });
        }
    }
    render() {
        return (
            <div className="board">
                <div className="list-title">{this.state.title}</div>
                <ul>
                    {this.state.cards.map(cardObj => <Card key={cardObj.cardTitle} cardTitle={cardObj.cardTitle}/>)}
                </ul>
                {(this.state.addCard === true) && <input type="text" name="newCardTitle" onKeyDown={this.onEnter}></input>}
                <button className="btn btn-add-card" onClick={this.addCard}>+ Add a card</button>
            </div>
        );
    }
}