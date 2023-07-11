import { Component } from 'react';
import './App.css';
import CardList from './CardList';
import SearchBox from './SearchBox';


class App extends Component {
constructor(){
  super()
    this.state = {
      robots: [],
      searchfield: ''
    }
}

componentDidMount(){
  try{
    const fetchPromise = fetch('https://jsonplaceholder.typicode.com/users')
    fetchPromise.then(res => res.json())
    .then(data => this.setState({robots: data}));

  }catch(e){
    alert(e)
  }
}

onSearchChange = (event) => {
console.log(event.target.value)
this.setState({searchfield: event.target.value})

}
  render(){
    const fileredRobots = this.state.robots.filter(robots =>{
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
  return (
    <div className="App">
    <h1 className='moon-grey'>RoboFriends</h1>
    <SearchBox searchChange={this.onSearchChange} />
     <CardList RobotList={fileredRobots} />
    </div>
  );
 }
}

export default App;
