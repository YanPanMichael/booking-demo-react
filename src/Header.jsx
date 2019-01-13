import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOpen: false,
      headerTitle: 'Color'
    }
    this.unshiftRecord = this.unshiftRecord.bind(this);
    this.toggleList = this.toggleList.bind(this);
    this.changeHeaderTitle = this.changeHeaderTitle.bind(this);
    this.closeDropDown = this.closeDropDown.bind(this);
  }

  unshiftRecord(event) {
    if(!this.idvalue.value || !this.namevalue.value || this.state.headerTitle  === 'Color') {
      window.alert("Input data error, please input again");
      this.idvalue.focus();
      return;
    }
    const item = { id: this.idvalue.value, name: this.namevalue.value, color: this.state.headerTitle };
    let list = JSON.parse(localStorage.getItem('selfList') || '[]');
    list.unshift(item);
    localStorage.setItem('selfList', JSON.stringify(list));
    this.emptyRecord();
    this.props.loadListFunc();
    event.stopPropagation();
  }

  emptyRecord() {
    this.namevalue.value = '';
    this.idvalue.value = '';
    this.setState({headerTitle: 'Color'});
  }

  toggleList(event) {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }));
  }

  changeHeaderTitle(event) {
    this.setState({
      headerTitle: event.target.innerText,
      listOpen: false
    });
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
  }

  closeDropDown(event) {
    this.setState({
      listOpen: false
    });
  }

  render() {
    // const{list} = this.props
    const{listOpen, headerTitle} = this.state;
    return (
      <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Booking ticket</h3>
          </div>
          <div className="panel-body">
            <form action="" method="POST" className="form-inline form-haha">
            
              <div className="form-group">
                <label htmlFor="booking-id">Id</label>
                <input type="text" className="form-control" id="booking-id" ref={rel => this.idvalue = rel} placeholder="input id" />

                <label htmlFor="booking-name">Name</label>
                <input type="text" className="form-control" id="booking-name" ref={rel => this.namevalue = rel} placeholder="input name" />
              </div>

              <div className="btn-group" onBlur={this.closeDropDown}>
                {/* <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> */}
                <button type="button" className="btn btn-default dropdown-toggle" onClick={this.toggleList}>
                  {headerTitle} <span className={listOpen?"upret":"caret"}></span>
                </button>
                <ul className="dropdown-menu" style={{display: listOpen?"block":"none"}} onMouseDown={this.changeHeaderTitle} >
                  <li><a href="#">Red</a></li>
                  <li><a href="#">Black</a></li>
                  <li><a href="#">White</a></li>
                  <li><a href="#">Yellow</a></li>
                  <li role="separator" className="divider"></li>
                </ul>
                {/* <ul className="dropdown-menu">
                  <li><a href="#">Red</a></li>
                  <li><a href="#">Black</a></li>
                  <li><a href="#">White</a></li>
                  <li><a href="#">Yellow</a></li>
                  <li role="separator" className="divider"></li>
                </ul> */}
              </div>
            
              <button type="button" className="btn btn-primary" onClick={this.unshiftRecord}>Add</button>

            </form>
          </div>
      </div>
    );
  }
}

Header.propTypes = {
  loadListFunc: PropTypes.func.isRequired
};

export default Header;