import React, { Component } from 'react';
import sampleFlavors from './sample-flavors';
import IceCream from './components/IceCream';
import Search from './components/Search';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.filterList = this.filterList.bind(this);
        this.state = {
            filterText: "",
            flavors: {}
        };
    }


componentWillMount = () => {
  this.setState({flavors: sampleFlavors});
};

filterList = (event) => { // change
    let filteredList = this.state.flavors.map((item) => {
        return item.name;
    });

    filteredList = filteredList.filter((flavor)=> {
        return flavor.toLowerCase().search(
            event.target.value.toLowerCase()) !== -1;
    });
    filteredList = filteredList.map((flavor, i) => {
        return {
            id: `flavors${i}`,
            name: flavor,
        }
    });
    this.setState({
        flavors: filteredList
    });
    //this.setState({filterText:value});
};

filterUpdate(value){
  this.setState({filterText:value.target.value});

}



    render() {
    return (

      <div className="App">
          <div>
              <form className="Search">
                  <input name="name"
                         ref='filterInput'
                         type="text"
                         placeholder="Search Here"
                         onChange={this.filterList}
                  />
              </form>
          </div>
         <ul className="IceCream">
             {Object.keys(this.state.flavors).map(key =>(
                 <IceCream
                     key={key}
                     details={this.state.flavors[key]}
                 />
             ))}
          </ul>


        </div>
    );
  }
}

export default App;
