import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from './SearchBox';
import robots from './robots.json'
// import { PureComponent } from "react";



class App extends Component {
constructor(){
    super()
    this.state = {
    robot : robots,
    searchField: '',
    }

}

componentDidMount(){

    fetch('./robots.json').then(res => res.json()).then(res => this.setState({robot: res.data}))
}

onSearchChange = (event)=>{
    this.setState({searchField:event.target.value})
    
}
    render(){
        const { robot, searchField} = this.state
        const filteredRobots = robot.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
            })

        return(
            <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} value={searchField}/>    
                <CardList robot={filteredRobots}/>
            </div>
        )
    }
}
export default App