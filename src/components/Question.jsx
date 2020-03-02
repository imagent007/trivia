import React, { Component } from 'react';



class Question extends Component {

  constructor(props) {
    // This question needs to accept the data passed in from the App.
    super(props);
  }


// choices: (4) ["Fortnite", "Minecraft", "Super Smash Bros. Ultimate", "Final Fantasy 7"]
// correct_choice_index: 1
// question_text:"Which one of these is reffered to as Indie Games?"
  render() {
    return (
      <div>
        <h1>
          {/* Use the data passed in from the App to fill out fields and render questions.*/}
          {this.props.questionData.question_text}<br></br>
          {this.props.questionData.choices[0]}<br></br>
          {this.props.questionData.choices[1]}<br></br>
          {this.props.questionData.choices[2]}<br></br>
          {this.props.questionData.choices[3]}<br></br>
          correct answer: {this.props.questionData.correct_choice_index}<br></br>


          <button>Start</button>
          <button>Reset</button>
        </h1>
      </div>
    );
  }

}
export { Question };