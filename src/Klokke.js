import React from 'react';
import { Component } from 'react';
import './Klokke.css';

class Klokke extends Component{

constructor(props) {
  super(props);
}


tid() {
  this.setState({ tidNaa: 10 });

}
//setInterval(() => console.log('jeg skrives ut hvert sekund'), 1000)


    render() {
      return (
        <div className="Klokke">
            <this.tidNaa/>
        </div>
        );
    }


};
export default Klokke;
