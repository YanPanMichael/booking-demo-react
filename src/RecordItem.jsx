import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
          <td key={el} style={{fontWeight: this.context.fontWeight}}>{ this.props[el] }</td>
        ))
      }
      </tr>
    );
  }
}

RecordItem.propTypes = {

};

export default RecordItem;