import { useState } from 'react';
import './CoinContainer.css';
import { Coin } from './Coin';
import { choice } from './helpers';

export interface CoinContainerProps {

}

export enum Faces {
  'HEADS' = 'HEADS',
  'TAILS' = 'TAILS'
}

export const CoinContainer = (props: CoinContainerProps) => {
  const [flips, setFlips] = useState( 0 );
  const [face, setFace] = useState<Faces>( Faces.HEADS );
  const [heads, setHeads] = useState( 0 );
  const [tails, setTails] = useState( 0 );

  const flipCoin = () => {
    const faceChoice = choice([Faces.HEADS, Faces.TAILS]);
    face === Faces.HEADS ? setHeads(heads + 1) : setTails(tails + 1);
    setFlips(flips + 1);
    setFace(faceChoice);
  }

  const handleClick = () => {
    flipCoin();
  }

  return <div className="CoinContainer">
    <h2>Let's flip a coin</h2>
    <Coin face={face}/>
    <button onClick={handleClick}>FLIP</button>
    <p>Out of {flips} flips, there have been {heads} heads and {tails} tails.</p>
  </div>
}
