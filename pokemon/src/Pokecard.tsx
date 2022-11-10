import React from 'react';
import './Pokecard.css';

export interface PokecardProps {
  id: number;
  name: string;
  type: string;
  exp: number;
}

// const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

const padToThree = (number: number) => number <= 999 ? `00${number}`.slice(-3) : number;

export const Pokecard = ({id, name, type, exp}: PokecardProps) => {
  const imgSrc = `${POKE_API}${padToThree(id)}.png`;
  return <div className="Pokecard">
    <h1 className="Pokecard-title">{name}</h1>
    <img src={imgSrc} alt={name}/>
    <div className="Pokecard-data">Type: {type}</div>
    <div className="Pokecard-data">Exp: {exp}</div>
  </div>
}
