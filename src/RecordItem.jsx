import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ThemeContext } from './Context/theme-context';

class RecordItem extends Component {
  static contextTypes = {
    fontWeight: PropTypes.number
  }

  render() {
    // const { id, name, color } = this.props;
    return (
      <tr>
      {
        Object.keys(this.props).map(el => (
          <td key={el} style={{fontWeight: this.context.fontWeight, backgroundColor: this.context.background}}>{ this.props[el] }</td>
        ))
      }
      </tr>
    );
  }
}

RecordItem.propTypes = {

};

RecordItem.contextType = ThemeContext;
// static contextType = ThemeContext;

export default RecordItem;