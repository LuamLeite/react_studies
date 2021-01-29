import React, { Component } from 'react';
import './App.css';

function App() {
  // return (
    // <div className="App">
    // <h1> Hi, I'm React</h1>
    // </div>
  // );
  //Here is the equivalent of the JSX code above.
  return React.createElement('div', {className: 'App'}, null, React.createElement('h1', null, 'Does this work now?'));
}
export default App;