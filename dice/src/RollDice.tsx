import { useState } from 'react';
import { Die } from './Die';
import './RollDice.css';

export interface RollDiceProps {

}

export const RollDice = (props: RollDiceProps) => {
  const sides = ["one", "two", "three", "four", "five", "six"];
  const [dice, setDice] = useState( {die1: 'one', die2: 'one'} );
  const [isRolling, setIsRolling] = useState( false );

  const roll = (e: any) => {
    setIsRolling(true);
    const rollOne = sides[Math.floor(Math.random() * sides.length)];
    const rollTwo = sides[Math.floor(Math.random() * sides.length)];
    setDice({die1: rollOne, die2: rollTwo});
    setTimeout(() => {
      setIsRolling(false);
    }, 1000);
  }

  return <div className="RollDice">
    <div className="RollDice-container">
      <Die face={dice.die1} rolling={isRolling}/>
      <Die face={dice.die2} rolling={isRolling}/>
    </div>
    <button  disabled={isRolling} onClick={roll}>
      {isRolling ? 'Rolling' : 'Roll Dice'}
    </button>
  </div>
}
