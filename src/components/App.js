import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import FilterHogs from "./FilterHogs"
import HogTiles from "./HogTiles"
import hogs from "../porkers_data";

class App extends Component {

  state = {
    isGreased: false,
    sortBy: "",
    theseHogs: [...hogs]
  }

  changeGreasedFilter = () => {
    this.setState({
      isGreased: !this.state.isGreased
    })
  }

  changeSortFilter = (event) => {
    this.setState({
      sortBy: event.target.value
    }, this.sortHogs)
  }

  sortHogs = () => {
    let newHogs = [...this.state.theseHogs]
    if(this.state.sortBy === "name"){
      newHogs.sort((a , b) => (a.name > b.name) ? 1: -1)
    } else if(this.state.sortBy === "weight"){
      newHogs.sort((a, b) => (a.weight > b.weight ) ? 1: -1)
    } else {
      newHogs = [...hogs]
    }
    this.setState({
      theseHogs: newHogs
    })
  }

  render() {

    const greased = [...this.state.theseHogs].filter(eachHogs => {
      return eachHogs.greased === true
    })
    return (
      <div className="App">
        <Nav />
        <FilterHogs isGreased={this.state.isGreased} changeGreasedFilter = {this.changeGreasedFilter} changeSortFilter={this.changeSortFilter}/>
        <br/><br/>
        <HogTiles hogs={this.state.isGreased ? greased:this.state.theseHogs} />
      </div>
    );
  }
}

export default App;
