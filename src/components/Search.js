import React, { Component } from 'react';



class Search extends Component {
//   nameRef = React.createRef();
//
//   searchFlavor = event => {
//     const val = {
//       name: this.nameRef.current.value
//
//   }
//
//   console.log(val);
//
// };
  render() {
    const {filterVal, filterUpdate} = this.props
    console.log(filterVal);

    return (
      <div>

  <form className="Search">
    <input name="name"
      ref='filterInput'
      type="text"
      placeholder="Search Here"
      value={filterVal}
      onChange = {() => {
         filterUpdate(this.refs.filterInput.value)
      }}
     />
  </form>
</div>


    )};


}


export default Search;
