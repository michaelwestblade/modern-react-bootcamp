import './Coin.css';
import { Faces } from './CoinContainer';

export interface CoinProps {
  face: Faces;
}

export const Coin = (props: CoinProps) => {
  const coinImages = {
    'HEADS': 'https://tinyurl.com/react-coin-heads-jpg',
    'TAILS': 'https://tinyurl.com/react-coin-tails-jpg'
  };

  const faceImage = coinImages[props?.face];

  return <div className="Coin">
    <img src={faceImage} alt=""/>
  </div>
}
