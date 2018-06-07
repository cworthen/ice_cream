import React, { Component } from 'react';


class FlavorItem extends Component {


  render() {

    return (
      <li className="single-flavor">
        <h3 className="name">
          {this.props.details}
        </h3>
</li>
    );
  }
}

export default FlavorItem;
