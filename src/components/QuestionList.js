import React from 'react';
import Question from './Question';

class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      selectedQuestionId : null
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id){
    if(id !== this.state.selectedQuestionId) {
      this.setState( {selectedQuestionId: id} )
    }else{
      this.setState({selectedQuestionId: null})
    }
  }

  render(){
    let questions = this.props.questionData.map((question) =>{
      let flipButton = "+"
      let flipButtonClass = "inactive"
      let shownAnswer
      if(this.state.selectedQuestionId === question.id){
        shownAnswer = question.answer;
        flipButton = "-"
        flipButtonClass = "active"
      }

      return(
        <ul>
          < Question
            key = {question.id}
            question= {question.question}
            answer= {shownAnswer}
            handleClick = {() => this.handleClick(question.id)}
            button = {flipButton}
            flipButtonClass = {flipButtonClass}
          />
        </ul>
      )
    })

    return(<ul>{questions}</ul>)
  };
}

export default QuestionList;
