import React, { useState } from 'react';
import './Pokegame.css';
import { Pokedex } from './Pokedex';

export interface PokegameProps {};

export const Pokegame = (props: PokegameProps) => {
  const pokemon = [ { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
    { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
    { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
    { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
    { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
    { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
    { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
    { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }];

  let handOne = [];
  let handTwo = [...pokemon];

  while(handOne.length < handTwo.length) {
    let randomIndex = Math.floor(Math.random() * handTwo.length);
    let randomPokemon = handTwo.splice(randomIndex, 1)[0];
    handOne.push(randomPokemon);
  }

  let exp1 = handOne.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
  let exp2 = handTwo.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
  return <div className="Pokegame">
    <h1>Pokegame</h1>
    <Pokedex title="Hand One" pokemon={handOne} exp={exp1} isWinner={exp1 > exp2}/>
    <Pokedex title="Hand Two" pokemon={handTwo} exp={exp2} isWinner={exp2 > exp1}/>
  </div>
}
