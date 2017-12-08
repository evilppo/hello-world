import React from 'react';
import './App.css';
import HelloWorldList from './HelloWorldList';
import Klokke from './Klokke.js';


const App = () => {
  return (
    <div className="App">
    <Klokke/>
    <HelloWorldList />
    </div>
    );
};


export default App;