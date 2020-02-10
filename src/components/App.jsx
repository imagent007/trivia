import React, { Component } from 'react';
import '../css/App.css';
import { Question }  from './Question.jsx';
import firebase from 'clients/firebase.js';

class App extends Component {
  constructor(props) {
    super(props); 
    var database = buildFirebase();
  var databaseRef = database.ref("/questions");
  databaseRef.once("value").then(function(data) {
    // Extract the data form the database
    const questions = data.val();
    // Set the state of the "data" variable to the questions data.
    this.state = ( data: questions  ) 
  }
      
  }

  

  


  render() {
    return (
      <div className="app">
        // Need to pass in the data into question
        <Question/>

        
        
      </div>
    );
  }
}

export default App;