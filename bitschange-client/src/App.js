/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import MainPage from './MainPage';
import LoginPage from './Login';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    this.setState({isLoggedIn: true});
  }

  render() {
    return (
      <div className="App">
        {this.state.isLoggedIn ? <MainPage /> : <LoginPage handleLogin={this.handleLogin}/> }
      </div>
    );
  }
}

export default App;
