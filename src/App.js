import React, { Component } from 'react';
import sampleFlavors from './sample-flavors';
import IceCream from './components/IceCream';
import Search from './components/Search';
import './App.css';

class App extends Component {

  state = {
    flavors:{},
    filterText: ''
  }

componentDidMount = () => {
  this.setState({flavors: sampleFlavors});
  this.setState({filterText: ''});

};

filterUpdate(value){
  this.setState({filterText:value});
}



    render() {
      // console.log('filtertext state', this.state.filterText);
    const hasSearch =  this.state.filterText ? this.state.filterText.length : 0;
    return (

      <div className="App">
            <Search
              filterVal = {this.state.filterText}
              filterUpdate={this.filterUpdate.bind(this)}

            />
         <ul className="IceCream">
            {Object.keys(this.state.flavors).map(key =>(
              <IceCream
                 key={key}
                 details={this.state.flavors[key]}
                 filter={this.state.filterText}

               />

             ))}

          </ul>


        </div>
    );
  }
}

export default App;
