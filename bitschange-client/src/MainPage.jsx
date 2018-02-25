import React, { Component } from 'react';
import axios from 'axios';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balances: {},
    };
    this.fetchBalances = this.fetchBalances.bind(this);
  }

  componentDidMount() {
    this.fetchBalances();
  }

  fetchBalances() {
    axios({
      method: 'get',
      url: 'http://localhost:5000/balances',
    }).then(res => this.setState({ balances: res.data[0] }))
      .catch(err => console.log('err', err));
  }


  render() {
    return (
      <div className="main-page">
        <div className="navbar">Bitschange</div>
      </div>
    );
  }
}

export default MainPage;
