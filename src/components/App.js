import React from 'react';
import QuestionList from "./QuestionList";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      jsonData: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/questions')
      .then(response => {
         if (response.ok) {
           return response;
         } else {
           let errorMessage = `${response.status} (${response.statusText})`,
               error = new Error(errorMessage);
           throw(error);
         }
       })
       .then(response => response.json())
       .then(body => {
         console.log(body)
         this.setState( {jsonData: body} )
       })
       .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    return (
      <div>
        <h2>We are here to help</h2>
        <QuestionList
        questionData={this.state.jsonData}
         />
      </div>
    )
  }
}



export default App;
