import React, { Component } from 'react';
import Pokedex from './Pokedex';
import Char from './_image/4.png';
import Squ from './_image/7.png';
import Meta from './_image/11.png';
import Butt from './_image/12.png';
import Pika from './_image/25.png';
import Jigg from './_image/39.png';
import Geng from './_image/94.png';
import Eeve from './_image/133.png';

class Pokegame extends Component { 
  static defaultProps = {
    pokemon : [
      {id: 4, name: 'Charmander', type: 'fire', base_experience: 62, img: Char},
      {id: 7, name: 'Squirtle', type: 'water', base_experience: 63, img: Squ},
      {id: 11, name: 'Metapod', type: 'bug', base_experience: 72, img: Meta},
      {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178, img: Butt},
      {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112, img: Pika},
      {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95, img: Jigg},
      {id: 94, name: 'Gengar', type: 'poison', base_experience: 225, img: Geng},
      {id: 133, name: 'Eevee', type: 'normal', base_experience: 65, img: Eeve}
    ]
  } 

  render() {
    let hand1 = [];
    let hand2 = [...this.props.pokemon];

    while (hand1.length < hand2.length) {
      let randIdx = Math.floor(Math.random() * hand2.length);
      let randPokemon = hand2.splice(randIdx, 1)[0];
      hand1.push(randPokemon);
    }

    let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

    let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

    return <div>
      <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2}/>
      <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1}/>
    </div>
  } 
}

export default Pokegame;