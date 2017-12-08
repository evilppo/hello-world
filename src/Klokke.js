import React from 'react';
import { Component } from 'react';
import './Klokke.css';

class Klokke extends Component{

    constructor(props) {
      super(props);
      this.state = { counter: 0, alfa : "hei" };
      this.inkrementer = this.inkrementer.bind(this);
       setInterval(this.inkrementer, 1000);
    }

    inkrementer(){
        var gammel = this.state.counter;
        var ny = gammel + 1;
        this.setState({counter :  ny })
    }

    componentDidMount() {
        this.setState({alfa: "did mount"})
    }

    render() {
      return (
        <div className="Klokke">
            { this.state.counter }
           { JSON.stringify(this.state) }
        </div>
        );
    }

};
export default Klokke;