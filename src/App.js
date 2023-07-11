import { Component } from 'react';
import './App.css';
import CardList from './Components/CardList';
import SearchBox from './Components/SearchBox';
import img from './Ripple.svg';
import Scroll from './Components/Scroll';


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

this.setState({searchfield: event.target.value})

}
  render(){
    const { robots, searchfield} = this.state;
    const fileredRobots = robots.filter(robots =>{
      return robots.name.toLowerCase().includes(searchfield.toLowerCase());
    })
   return (!robots.length) ?
     (
        <div className='loader'>
          <img src={img} alt="loader"></img>
        </div>
      ) :
    (
    <div className="App">
    <h1 className='moon-grey'>RoboFriends</h1>
    <SearchBox searchChange={this.onSearchChange} />
    <Scroll>
      <CardList RobotList={fileredRobots} />
     </Scroll>
    </div>
  );
 }
}

export default App;
