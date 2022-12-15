import React from 'react';
import './App.css';
import { CounterHooks } from './CounterHooks';
import { Toggler } from './Toggler';
import { SimpleFormHooks } from './SimpleFormHooks';

function App() {
  return (
    <div className="App">
      <Toggler/>
      <SimpleFormHooks/>
    </div>
  );
}

export default App;
