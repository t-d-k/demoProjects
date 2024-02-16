// const [profiles, setProfiles] = useState([])
import { useEffect, useState } from 'react';
import Question from './Question';

import QuestionBlock from './QuestionBlock';
function App() {
  const [questions, setQuestions] = useState([ ]);

  useEffect(() => {
    //called twice because of strict mode 
    if (questions.length == 0) {
      readJson();
      console.log('questions: ' + questions);
    }
  }, []) // <-- empty dependency array

  function readJson() {
    fetch('https://opentdb.com/api.php?amount=10 ')
      .then(response => {
        if (!response.ok) {
          throw new Error("HTTP error " + response.status);
        }
        return response.json();
      })
      .then(json => {        
        console.log('results: ' + JSON.stringify(json.results));
        setQuestions(json.results);
      })
      .catch(function (err) {
        console.log('dataError' +err);
      })
  }

  function getLines() {
    var lines = [];
    questions.forEach(function (question) {
      lines.push(<QuestionBlock
         ques={question.question} 
         answers={question.incorrect_answers}
         correct_answer={question.correct_answer}
      />);
    });

    return lines;
  }
  return (
    <div className="App"    >
      <h1>Trivia Site</h1>
      <header className="App-header" >
        {getLines()}
      </header>
    </div>
  );
}
export default App;