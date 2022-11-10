import React from 'react';
import './Pokecard.css';

export interface PokecardProps {
  id: number;
  name: string;
  type: string;
  exp: number;
}

const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

export const Pokecard = ({id, name, type, exp}: PokecardProps) => {
  const imgSrc = `${POKE_API}${id}.png`;
  return <div className="Pokecard">
    <h1 className="Pokecard-title">{name}</h1>
    <img src={imgSrc} alt={name}/>
    <div className="Pokecard-data">Type: {type}</div>
    <div className="Pokecard-data">Exp: {exp}</div>
  </div>
}
