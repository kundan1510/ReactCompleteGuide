import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';

const app = props => {

  const [personState, setPersonState] = useState({
    persons: [
      {name : "Kundan Kumar", age : 29},
      {name : "Rima Kumari", age : 24}
    ]
  });
  const [otherState, setOtherState] = useState('this is other state');
  console.log(personState, otherState);
  const switchNameHandler = () =>{
    //console.log('Button Clicked');
    setPersonState({
      persons:[
        {name : "Kundan1 Kumar", age : 29},
        {name : "Rima1 Kumari", age : 24}
      ]
    })
  }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <h1>I am React App </h1>
        <Person name = {personState.persons[0].name} age = {personState.persons[0].age}> My Hobbies : Singing</Person>
        <Person name = {personState.persons[1].name} age = {personState.persons[1].age}> My Hobbies : Eating</Person>
      </div>
    );
  }

export default app;
