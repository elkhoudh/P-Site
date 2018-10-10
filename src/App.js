import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import Header from './Layout/Header';
import Main from './Layout/MainContent/Main';

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
