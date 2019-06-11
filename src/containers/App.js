import React, { Component } from 'react';
import './App.css';
// import Card from '../components/Card';
// import {starwars} from '../starwars';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';


class App extends Component {
  constructor(){
    super()
    this.state = {
      starwars: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://swapi.co/api/people/1')
      .then(resp => resp.json())
      .then(people => this.setState({ starwars: people }));
  }

  onSearchCahnge = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { starwars, searchfield } = this.state;
    const filteredChar = starwars.filter(starwars => {
      return starwars.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return (
      <div className="App">
        <h1 className="f2">Star Wars</h1>
        <SearchBox searchChange={this.onSearchCahnge}/>
        {/* <Card id={starwars[0].id} name={starwars[0].name} height={starwars[0].height} mass={starwars[0].mass}/> */}
        <CardList starwars={filteredChar}/>
      </div>
    )
  }
}

export default App;