import React, { Component } from 'react';




class FlavorList extends Component {

  render() {

    const list = Object.keys(this.props.flavors).map( key =>
    this.props.flavors[key];
    );

    return (
<div className="flavors">

<p>
{ list }
</p>

  </div>



    );
  }
}

export default FlavorList;
