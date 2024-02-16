import { decodeHtml } from './Question.js';

function checkAns(evt, correct,onAnswered) {
    evt.target.style.background = correct ? "green" : "red";
    onAnswered();
}

function AnswerBlock(params) {
    return (<button
        class="answer"
        onClick={(evt) => checkAns(evt, params.correct, params.onAnswered)} 
        disabled={params.disabled}
        >
        {decodeHtml(params.answer)}
        </button>)
}
export default AnswerBlock

