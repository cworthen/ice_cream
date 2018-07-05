import React, { Component } from 'react';



class Search extends Component {
  render() {
    //const {filterVal, filterList} = this.props
      const { filterList } = this.props
    //console.log(filterVal);

    return (
      <div>

  <form className="Search">
    <input name="name"
      ref='filterInput'
      type="text"
      placeholder="Search Here"
      // value={filterVal}
           onChange={this.filterList}
      // onChange = {() => {
      //     this.filterList;
      //    // filterList(this.refs.filterInput.value)
      // }}
     />
  </form>
</div>


    )};


}


export default Search;
