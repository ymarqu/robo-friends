import { Component } from 'react';
import './App.css';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';


class App extends Component {
constructor(){
  super()
    this.state = {
      robots: robots,
      searchfiel: ''
    }
}

onSearchChange(event){
console.log(event)
}
  render(){
  return (
    <div className="App">
    <h1>RoboFriends</h1>
    <SearchBox searchChange={this.onSearchChange} />
     <CardList RobotList={this.state.robots} />
    </div>
  );
 }
}

export default App;
