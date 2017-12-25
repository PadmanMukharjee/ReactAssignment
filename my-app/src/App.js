import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from './table';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      n1: 0,
      n2: 0,
      result: 0,
      calc: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
    this.clear = this.clear.bind(this);
    this.pastCalculations = this.pastCalculations.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value
    });
  }
  add() {  
    this.pastCalculations("+",Number(this.state.n1) + Number(this.state.n2));
  }
  subtract() {   
    this.pastCalculations("-",Number(this.state.n1) - Number(this.state.n2));
  }
  multiply() {
    this.pastCalculations("*", Number(this.state.n1) * Number(this.state.n2));
  }
  divide() {
    if (this.state.n2 > 0) {
      this.pastCalculations("/", Number(this.state.n1) / Number(this.state.n2));
    }
    else {
      alert("enter number 2 greater than 0")
    }
  }

  clear() {
    this.setState({
      n1: 0,
      n2: 0,
      result: 0
    })
  }

  pastCalculations(operator, res) {
    if (this.state.calc.length >= 10) {
      this.state.calc.pop();
    }
    var arry = this.state.calc;
    arry.push({
      n1: this.state.n1,
      n2: this.state.n2,
      operator: operator,
      res: res
    }) 

    this.setState({
      result: res,
      calc: arry
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          Simple Calculator
          <div>
            <input type="number" name="n1" value={this.state.n1} onChange={this.handleChange} />
            <input type="number" name="n2" value={this.state.n2} onChange={this.handleChange} />
          </div>
          <div>
            <input type="button" name="add" value="add" onClick={this.add} />
            <input type="button" name="Subtract" value="Subtract" onClick={this.subtract} />
            <input type="button" name="multiply" value="multiply" onClick={this.multiply} />
            <input type="button" name="divide" value="divide" onClick={this.divide} />
          </div>
          <div>
            <input type="number" name="result" value={this.state.result} />
            <input type="button" name="clear" value="clear" onClick={this.clear} />
          </div>
        </div>
        <Grid className="App" previous={this.state.calc}>
        </Grid>
      </div>
    );
  }
}

export default App;
