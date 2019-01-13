import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Body from './Body';

import {ThemeContext, themes} from './Context/theme-context';

class Booking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      theme: themes.light
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

  getChildContext() {
    return {
      fontWeight: 700
    }
  }

  toggleTheme() {
    this.setState(state => ({
      theme: state.theme === themes.dark
          ? themes.light
          : themes.dark,
    }));
  }

  static childContextTypes = {
    fontWeight: PropTypes.number
  }

  render() {
    return (
      <div className="booking">
        <Header loadListFunc={() => this.loadListFromLocalstorage()} changeThemeFunc={() => this.toggleTheme()} />
        <ThemeContext.Provider value={this.state.theme}>
          <Body list={this.state.list} />
        </ThemeContext.Provider>
      </div>
    );
  }
}

Booking.propTypes = {

};

export default Booking;