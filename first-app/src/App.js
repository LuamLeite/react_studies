import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component { 
  //Only use state to manage internal component data, you don't want to use globally and not much
 state = {
   persons: [
     { name: 'Max', age: 28 },
     { name: 'Manu', age: 29 },
     { name: 'Stephanie', age: 26 }
   ],
   otherState: 'some other value'
 } //We just want to be executed when clicked

  switchNameHandler = () => {
    console.log('Was clicked');
    this.setState({
      persons: [
        { name: 'Maximillian', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  }

render(){
  return (
    <div className="App">
    <h1> Hi, I am React</h1>
    <button onClick={this.switchNameHandler}> Switch Name </button>
    <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
    <Person name={this.state.persons[1].name} age ={this.state.persons[1].age}/>
    <Person name={this.state.persons[2].name} age={this.state.persons[2].age}> My Hobbies: Racing </Person>
    </div>
  );
  }
}
export default App;