import React, { Component } from 'react'; 



class Question extends Component {
  
    constructor(props) {
      // This question needs to accept the data passed in from the App.
      super(props); 
       
        } 
    
      

  
  render() {
    return (
      <div>
      <h1>
        // Use the data passed in from the App to fill out fields and render questions.
        Hello, Students 
       <button>Start</button> 
        <button>Reset</button>
        </h1>
      </div>
    });

}
export { Question };