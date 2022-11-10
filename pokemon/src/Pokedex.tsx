import React from 'react';
import './Pokedex.css';
import { Pokecard } from './Pokecard';

export interface PokedexProps {
  pokemon?: {id: number; name: string; type: string; base_experience: number;}[];
  title?: string;
  isWinner?: boolean;
  exp?: number;
}

const defaultPokemon = [
  { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
  { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
  { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
  { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
  { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
  { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
  { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
  { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
];
const defaultProps = {pokemon: defaultPokemon};

export const Pokedex = ({pokemon = defaultPokemon, title = "Pokedex", exp, isWinner}: PokedexProps) => {
  const subTitle = isWinner ? <h2 className="Pokedex-winner">WINNER</h2> : <h2 className="Pokedex-loser">LOSER</h2>;
  return <div className="Pokedex">
    <h1>{title}</h1>
    <p>Total Exp: {exp}</p>
    {subTitle}
    <div className="Pokedex-cards">
      {pokemon.map(pokemon => <Pokecard key={pokemon.id} id={pokemon.id} name={pokemon.name} type={pokemon.type} exp={pokemon.base_experience}/>)}
    </div>
  </div>
}
