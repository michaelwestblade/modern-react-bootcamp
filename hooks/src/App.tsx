import React from 'react';
import './App.css';
import { CounterHooks } from './CounterHooks';
import { Toggler } from './Toggler';
import { SimpleFormHooks } from './SimpleFormHooks';
import { SWMovies } from './SWMovies';

function App() {
  return (
    <div className="App">
      <SWMovies/>
      <CounterHooks/>
      <Toggler/>
      <SimpleFormHooks/>
    </div>
  );
}

export default App;
