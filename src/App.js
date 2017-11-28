import React from 'react';
import './App.css';
import HelloWorld from './HelloWorld.js';

const App = () => {
  return (
    <div className="App">
    <HelloWorld name="Eirik"/>
    <HelloWorld name="Nicoline"/>
    <HelloWorld name="Patrick"/>
    </div>
    );
};


export default App;