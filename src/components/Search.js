import React, { Component } from 'react';


class Search extends Component {
  nameRef = React.createRef();

  searchFlavor = event => {
    const val = {
      name: this.nameRef.current.value

  }

  console.log(val);

 };


  render() {

    return (
      <div>

  <form className="Search" onChange ={this.searchFlavor.bind(this)} >
    <input name="name"
      ref={this.nameRef}
      type="text"
      placeholder="Search Here"
     />
  </form>
</div>



    )};



}


export default Search;
