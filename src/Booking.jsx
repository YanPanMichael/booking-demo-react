import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Body from './Body';

class Booking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }

  componentWillMount() {
    this.loadListFromLocalstorage();
  }

  loadListFromLocalstorage() {
    const list = JSON.parse(localStorage.getItem('selfList') || '[]');
    this.setState({
      list
    });
  }

  render() {
    return (
      <div className="booking">
        <Header loadListFunc={() => this.loadListFromLocalstorage()}/>
        <Body list={this.state.list} />
      </div>
    );
  }
}

Booking.propTypes = {

};

export default Booking;