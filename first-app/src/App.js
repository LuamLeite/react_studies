import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  //Only use state to manage internal component data, you don't want to use globally and not much
  React.state = {
    persons: [
      { name: 'Max', age: 28},
      { name: 'Manu', age: 29},
      { name: 'Stephanie', age: 26}
    ],
    switchNameHandler: () => {
      console.log('Was clicked!');
    }
  }

  //good pratice to name as Handler
  //We don't add parenthesis to the onClick, because if we do, the function will be instantly executed as the dom loads.
  //We just want to be executed when clicked

  return (
    <div className="App">
    <h1> Hi, I am React</h1>
    <button onClick={React.state.switchNameHandler}> Switch Name </button>
    <Person name={React.state.persons[0].name} age={React.state.persons[0].age}/>
    <Person name={React.state.persons[1].name} age ={React.state.persons[1].age}/>
    <Person name={React.state.persons[2].name} age={React.state.persons[0].age}> My Hobbies: Racing </Person>
    </div>
  );
}
export default App;