import React, { Component } from "react";

class Part2 extends Component {
  render() {
    console.log(this);
    
    return (
      <div>
        Part2 --- {this.props.match.params.type + ' ' + this.props.match.params.id}
      </div>
    );
  }
}

export default Part2;
