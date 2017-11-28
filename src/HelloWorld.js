import React from 'react';
import './HelloWorld.css';
import { Component } from 'react';

class HelloWorld extends Component{

constructor(props) {
  super(props);
  this.state = { greeting: 'Hello' };
  this.frenchify = this.frenchify.bind(this);
  this.englishify = this.englishify.bind(this);
}

frenchify() {
  this.setState({ greeting: 'Bonjour' });
}

englishify() {
  this.setState({ greeting: "Cheerio"});
}

    render() {
      return (
        <div className="HelloWorld">
            { this.state.greeting } { this.props.name }!
            <br/>
            <button onClick={this.frenchify}>Frenchify!</button>
            <button onClick={this.englishify}>ENGLISH!!</button>
        </div>
        );
    }
};


export default HelloWorld;