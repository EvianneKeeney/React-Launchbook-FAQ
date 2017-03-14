import React from 'react';

class Question extends React.Component{
  constructor(props){
    super(props);
  }

  render(){

    return(
      <li>
        <button onClick={this.props.handleClick} className={this.props.flipButtonClass}>
          {this.props.button}
        </button>
        {this.props.question}
        <p> {this.props.answer}</p>
      </li>
    )
  }

}

export default Question;
