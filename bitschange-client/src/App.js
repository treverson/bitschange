/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import MainPage from './MainPage';
import LoginPage from './Login';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.isLoggedIn ? <MainPage /> : <LoginPage /> }
      </div>
    );
  }
}

export default App;
