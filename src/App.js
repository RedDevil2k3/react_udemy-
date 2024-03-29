import { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import { response } from 'express';

class App extends Component {
  constructor() {
    super();
    this.state = {
    monsters: []
  };
}

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then((response) =>
    console.log(response)
    );
  }
  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map((monster) => {  
            return (
              <div key={monster.id}>
                <h1 >{monster.name}</h1>
              </div>
            );
          })}
      </div>
    );
  }
}

export default App;
