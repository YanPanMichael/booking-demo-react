import React, { Component } from 'react';
import { Route } from "react-router-dom";
import PropTypes from 'prop-types';

import Header from './Header';
import Body from './Body';

import Part2 from './Part2';
import Part3 from './Part3';

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
          {/* <Body list={this.state.list} /> */}
          <Route path="/" exact render={(props) => <Body {...props} list={this.state.list} />}></Route>
        </ThemeContext.Provider>
        <hr />
        <Route path="/part2" component={Part2}></Route>
        <hr />
        <Route path="/part3" component={Part3}></Route>
      </div>
    );
  }
}

Booking.propTypes = {

};

export default Booking;