import React, { Component } from 'react';


class IceCream extends Component {
  render() {
    //console.log(this.props.details);
    return (

      <li className="IceCream">
     {this.props.details.name}
    </li>

    );
  }
}

export default IceCream;
