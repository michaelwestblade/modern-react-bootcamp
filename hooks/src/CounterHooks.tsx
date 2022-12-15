import { useState } from 'react';

export const CounterHooks = () => {

  const [count, setCount] = useState( 0 );
  const increment = () => {
    setCount(count+1);
  }

  return <div>
    <h1>The count is {count}</h1>
    <button onClick={increment}>CLICK</button>
  </div>
}
