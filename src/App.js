import React from 'react';
import './App.css';
import HelloWorld from './HelloWorld.js';
import Klokke from './Klokke.js';

const App = () => {
  return (
    <div className="App">
    <Klokke/>
    <HelloWorld name="Eirik"/>
    <HelloWorld name="Nicoline"/>
    </div>
    );
};


export default App;