// Importantando o React
import React, { Component } from 'react';
// Importantando o Component Header
import Header from './components/header/header'
// Importantando o component Main
import Main from './main'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;