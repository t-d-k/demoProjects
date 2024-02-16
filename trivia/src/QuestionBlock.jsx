// import { useState } from 'react'
import { useRef, useState } from 'react';
import AnswerBlock from './AnswerBlock';
import './QuestionBlock.css'
import { decodeHtml } from './Question.js';

/**
 * 
 * @param {callback } onanswered
 * @param {string} correct_answer 
 * @param {string array} answers 
 * 
 * @returns component
 */
function QuestionBlock(params) {
    const [answered, setAnswered] = useState(false)
    function onAnswered() {
        console.log('answered')
        setAnswered(true);
    }
    function buildAnswers() {
        const res = [];
        const fullAns = [...params.answers];
        fullAns.push(params.correct_answer);
        // console.log('params.correct_answer ' + params.correct_answer);
        fullAns.sort(); // or correct answer will always be at end
        fullAns.forEach(ans => {
            // console.log(JSON.stringify({ans}));
            res.push(<AnswerBlock answer={ans}
                correct={ans == params.correct_answer}
                onAnswered={onAnswered}
                disabled={answered}
            ></AnswerBlock>)
        })

        return res;
    }
    return (
        <div class={answered ? "answered" : "not-answered"}     >
            <div class="questionData " >
                <span id="question"> {decodeHtml(params.ques)}</span>
                {buildAnswers()}
            </div>
        </div>
    )
}
export default QuestionBlock
