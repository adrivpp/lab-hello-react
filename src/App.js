import React, { Component } from 'react';
import Navbar from './components/Navbar'
import './App.css';
import data from './data/card-data.json';
import Card from './components/Card';

const items = data.map((info, index) => {
  return <Card key={`id-${index}`} info={info} />
})

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <header className="App-header">
          <h1>Say hello to ReactJS</h1>
          <p>You will learn a Frontend framework from scratch, to became a Ninka Developer.</p>
          <p className="block">Awesome!</p>        
        </header>
        <div className="information">
          {items}
        </div>
      </div>
    );
  }
}

export default App;
