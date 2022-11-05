import React, { Component } from 'react';
import './Joke.css';

export default class Joke extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: '#FF9800',
      emoji: 'em em-confused',
    };

    this.handleUpClick = this.handleUpClick.bind(this);
    this.handleDownClick = this.handleDownClick.bind(this);
  }

  changeState() {
    if (this.props.votes >= 15) {
      return this.setState(st => ({
        color: (st.color = '#4CAF50'),
        emoji: (st.emoji = 'em em-rolling_on_the_floor_laughing'),
      }));
    } else if (this.props.votes >= 12) {
      return this.setState(st => ({
        color: (st.color = '#8BC34A'),
        emoji: (st.emji = 'em em-laughing'),
      }));
    } else if (this.props.votes >= 9) {
      return this.setState(st => ({
        color: (st.color = '#CDDC39'),
        emoji: (st.emoji = 'em em-smiley'),
      }));
    } else if (this.props.votes >= 6) {
      return this.setState(st => ({
        color: (st.color = '#FFEB3B'),
        emoji: (st.emoji = 'em em-slightly_smiling_face'),
      }));
    } else if (this.props.votes >= 3) {
      return this.setState(st => ({
        color: (st.color = '#FFC107'),
        emoji: (st.emoji = 'em em-neutral_face'),
      }));
    } else if (this.props.votes >= 0) {
      return this.setState(st => ({
        color: (st.color = '#FF9800'),
        emoji: (st.emoji = 'em em-confused'),
      }));
    } else {
      return this.setState(st => ({
        color: (st.color = '#F44336'),
        emoji: (st.emoji = 'em em-angry'),
      }));
    }
  }

  handleUpClick() {
    this.props.upvote();
    this.changeState();
  }

  handleDownClick() {
    this.props.downvote();
    this.changeState();
  }

  render() {
    return (
      <div className="Joke">
        <div className="Joke-buttons">
          <i className="fas fa-arrow-up" onClick={this.handleUpClick}></i>
          <span
            className="Joke-votes"
            style={{ borderColor: this.state.color }}
          >
            {this.props.votes}
          </span>
          <i className="fas fa-arrow-down" onClick={this.handleDownClick}></i>
        </div>
        <div className="Joke-text">{this.props.text}</div>
        <div className="Joke-smiley">
          <i className={this.state.emoji}></i>
        </div>
      </div>
    );
  }
}
