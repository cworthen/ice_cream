import React, { Component } from 'react';
import sampleFlavors from './sample-flavors';
import IceCream from './components/IceCream';
import FlavorList from './components/FlavorList';
import Search from './components/Search';
import './App.css';

class App extends Component {

  state = {
    flavors:{}
  }

//
//   loadSampleFlavors = () =>{
//    this.setState({flavors: sampleFlavors}, () => console.log(this.state.flavors));
//   //alert('hello');
// };
// //
componentDidMount = () => {
  this.setState({flavors: sampleFlavors});
};

    render() {


    return (
      <div className="App">
            <Search />
         <ul className="IceCream">
            {Object.keys(this.state.flavors).map(key =>(
              <IceCream
                 key={key}
                 details={this.state.flavors[key]}
               />

             ))}
             <FlavorList
               flavors = {this.state.flavors}/>
          </ul>






        </div>
    );
  }
}

export default App;
