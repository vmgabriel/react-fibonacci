
/**
 * @fileOverview
 * @name Fibbonacci.jsx
 * @author vmgabriel
 * @license GPL
 */

// Libraries
import React from 'react';


class Fibbonacci extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fibbo: ''
    };
  }

  getFibbo(value) {
    if (value <= 1) return value;
    return this.getFibbo(value - 1) + this.getFibbo(value - 2);
  }

  handleChange = (e) => {
    const data = parseInt(e.target.value);
    if (data !== undefined && !(isNaN(data))) {
      let dValue = '';
      this.setState({
        fibbo: ''
      });

      let i = 1;
      while(data > this.getFibbo(i)) {
        dValue += `${this.getFibbo(i)} `;
        i += 1;
      }

      this.setState({
        fibbo: dValue
      });
    }
  }

  render() {
    return (
      <div>
        <h1>Fibbonacci</h1>
        <p>{this.state.fibbo || ''}</p>
        <input type="text" name="fibbo" onChange={this.handleChange} />
      </div>
    );
  }

}


export default Fibbonacci;
