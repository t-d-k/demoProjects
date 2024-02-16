import { useEffect, useState } from 'react';


import QuestionBlock from './QuestionBlock';

import './App.css';

function App() {
  const [questions, setQuestions] = useState([]);
  const [numQs, setnumQs] = useState(10);
  const [updated, setUpdated] = useState(false);
  useEffect(() => {
    //called twice because of strict mode 
    if (questions.length == 0) {
      // readJson();
      console.log('questions: ' + questions);
    }
  }, []) // <-- empty dependency array

  function readJson() {
    console.log(`https://opentdb.com/api.php?amount=${numQs}`)
    fetch(`https://opentdb.com/api.php?amount=${numQs}`)
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
        console.log('dataError' + err);
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

  function inputChanged(newInput) {
    setnumQs(newInput);
  }
  function updateClicked() {
    readJson();
    setUpdated(true);
  }
  return (
    <div className="App"    >
      <h1>Trivia Site</h1>
      <div id="options" class={updated?"optdisabled":""}>
        <label htmlFor="numq">Number of Questions:</label>
        <input  disabled={updated?"true":""} id="numq" value={numQs} onInput={e => inputChanged(e.target.value)} />
        <button disabled={updated?"true":""} onClick={updateClicked} >Update</button>
      </div>
      <header className="App-header" >
        {getLines()}
      </header>
    </div>
  );
}
export default App;