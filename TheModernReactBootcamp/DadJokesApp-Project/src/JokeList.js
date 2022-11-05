import React, { Component } from 'react';
import axios from 'axios';
import Joke from './Joke';
import './JokeList.css';
import smileIcon from './icons/smile.svg';

export default class JokeList extends Component {
  static defaultProps = {
    numJokesToGet: 10,
  };

  constructor(props) {
    super(props);

    this.state = {
      jokes: JSON.parse(window.localStorage.getItem('jokes') || '[]'),
      loading: false,
    };

    this.seenJokes = new Set(this.state.jokes.map(joke => joke.text));

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ loading: true }, this.getJokes);
  }

  uniqId() {
    let id = Math.random().toString(15).substring(2).split('');

    for (let i = 0; i < id.length; i++) {
      if (i % 5 === 1) {
        id.splice(i, 0, '-');
      }
    }

    return id.join('');
  }

  componentDidMount() {
    if (this.state.jokes.length === 0) {
      this.getJokes();
    }
  }

  async getJokes() {
    try {
      // Load Jokes
      let jokes = [];

      while (jokes.length < this.props.numJokesToGet) {
        let res = await axios.get('https://icanhazdadjoke.com/', {
          headers: { Accept: 'application/json' },
        });

        let newJoke = res.data.joke;

        if (!this.seenJokes.has(newJoke)) {
          jokes.push({ id: this.uniqId(), text: newJoke, votes: 0 });
        } else {
          console.log('FOUND A DUPLICATE');
          console.log(newJoke);
        }
      }

      this.setState(
        st => ({ loading: false, jokes: [...st.jokes, ...jokes] }),
        () =>
          window.localStorage.setItem('jokes', JSON.stringify(this.state.jokes))
      );
      window.localStorage.setItem('jokes', JSON.stringify(jokes));
    } catch (err) {
      alert(err);
      this.setState({ loading: false });
    }
  }

  handleVote(id, delta) {
    this.setState(
      st => ({
        jokes: st.jokes.map(joke =>
          joke.id === id ? { ...joke, votes: joke.votes + delta } : joke
        ),
      }),
      () =>
        window.localStorage.setItem('jokes', JSON.stringify(this.state.jokes))
    );
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="JokeList-spinner">
          <i className="far fa-8x fa-laugh fa-spin"></i>
          <h1 className="JokeList-title">Loading...</h1>
        </div>
      );
    }

    let jokes = this.state.jokes.sort((a, b) => b.votes - a.votes);
    return (
      <div className="JokeList">
        <div className="JokeList-sidebar">
          <h1 className="JokeList-title">
            <span>Dad</span> Jokes
          </h1>
          <img src={smileIcon} alt="" />
          <button className="JokeList-getmore" onClick={this.handleClick}>
            Fetch Jokes
          </button>
        </div>
        <div className="JokeList-jokes">
          {jokes.map(joke => (
            <Joke
              key={joke.id}
              votes={joke.votes}
              text={joke.text}
              upvote={() => this.handleVote(joke.id, 1)}
              downvote={() => this.handleVote(joke.id, -1)}
            />
          ))}
        </div>
      </div>
    );
  }
}
