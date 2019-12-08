import React, { Component } from 'react';
import './taskList.css';
import sampleBoard from '../sampleBoard.js';
import Card from './card.js';

export default class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            cards: []
        }
    }
    componentWillMount() {
        this.setState({
            title: sampleBoard.taskLists[0].title,
            cards: sampleBoard.taskLists[0].cards
        });
    }
    renderCards(key) {
        return (
            <Card cardTitle={key.cardTitle}/>
        )
    }
    render() {
        return (
            <div className="board">
                <div className="list-title">{this.state.title}</div>
                <ul>
                    {this.state.cards.map(cardObj => this.renderCards(cardObj))}
                </ul>
                + Add a card
            </div>
        );
    }
}