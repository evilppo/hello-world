import React, { Component } from 'react';
import './HelloWorldList.css';
import HelloWorld from './HelloWorld';
import AddGreeter from './AddGreeter.js';

class HelloWorldList extends Component {
constructor(props) {
  super(props);
  this.state = { greetings: ['Eirik', 'Nicoline', 'Patrick'] };

}

renderGreetings() {
  return this.state.greetings.map(name => (
    <HelloWorld key={name} name={name}/>
  ));
}

  render() {
    return (
      <div className="HelloWorldList">
        <AddGreeter />
        {this.renderGreetings()}
      </div>
    );
  }
}
export default HelloWorldList;