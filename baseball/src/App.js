import React, { Component } from 'react';
import './App.css';
import Dashboard from './Dashboard/dashboard';
import Display from './Display/display';

class App extends Component {
  state={
    ball: 0,
    strike: 0
  }

  ball = e => {
    e.preventDefault();
    this.state.ball===3?
    this.setState({ ball: 0 }):
    this.setState({ ball: this.state.ball+1 });
  };

  strike = e => {
    e.preventDefault();
    this.state.strike===2?
    this.setState({ strike: 0 }):
    this.setState({ strike: this.state.strike+1 });
  };

  foul = e => {
    e.preventDefault();
    if (this.state.strike!==2) this.setState({ strike: this.state.strike+1 });
  };

  hit = e => {
    e.preventDefault();
    this.setState({ ball: 0, strike: 0 });
  };

  render() {
    return (
      <div className="App">
        <Dashboard 
          ball={this.ball}
          strike={this.strike}
          foul={this.foul}
          hit={this.hit}
        />
        <Display 
          ball={this.state.ball}
          strike={this.state.strike}
        />
      </div>
    );
  }
}

export default App;
