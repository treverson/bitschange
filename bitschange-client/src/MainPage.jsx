import React, { Component } from 'react';
import axios from 'axios';

class MainPage extends Component {
  constructor(props) {
    super(props);
    axios({
      method: 'get',
      url: 'http://localhost:5000/balances',
    }).then(res => console.log('res', res))
      .catch(err => console.log('err', err));
  }

  render() {
    return <div className="navbar">Bitschange</div>;
  }
}

export default MainPage;
