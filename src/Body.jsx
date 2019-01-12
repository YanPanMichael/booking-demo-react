import React, { Component } from 'react';
import PropTypes from 'prop-types';

import RecordItem from './RecordItem';

class Body extends Component {

  // componentWillMount() {
  //   const list = JSON.parse(localStorage.getItem('selfList') || '[]');
  //   this.setState({
  //     list
  //   });
  // }
  
  render() {
    const { list } = this.props;
    return (
      <table className="table table-responsive table-hover">
        <thead>
          <tr>
            {
              list && list[0] && Object.keys(list[0]).map(elKey => (
                <td key={elKey}>{elKey}</td>
              ))
            }
            {/* <td>id</td>
            <td>name</td>
            <td>color</td> */}
          </tr>
        </thead>
        <tbody>
          {list && list.map((elem, index) => (
            <RecordItem key={index} {...elem} />
          ))}
        </tbody>
      </table>
    );
  }
}

Body.propTypes = {
  dataList: PropTypes.array
};

Body.defaultProps = {
  dataList: []
};

export default Body;