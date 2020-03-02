import React, { Component } from 'react';
import '../css/App.css';
import { Question } from './Question.jsx';
import { buildFirebase, getRandomQuestion } from '../clients/firebase.js'


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {data: [],
      currentQuestion: { 
        choices: ["48", "13", "52", "50"],
        correct_choice_index: 3,
        question_text: "How many states are in the United States?",
        user_id: "ZbCvDadaM0SD9YjAXrHMEDLVGoj2"
      }
    };

    var database = buildFirebase();
    var databaseRef = database.ref("/questions");

    databaseRef.once("value").then(data => {
      // Extract the data form the database
      const questions = data.val();
      const currQ = getRandomQuestion(questions);
      // Set the state of the "data" variable to the questions data.
       this.setState({data: questions, currentQuestion: currQ });
       console.log(currQ);
    });
  }
  render() {
    return (
      <div className="app">
        {/* Need to pass in the data into question*/}
        <Question questionData={this.state.currentQuestion}/>
      </div>
    );
  }
}

export default App;