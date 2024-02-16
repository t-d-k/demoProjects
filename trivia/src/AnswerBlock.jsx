import { decodeHtml } from './Question.js';
/**
 * 
 * @param {DOM event} evt 
 * @param {boolean} correct 
 * @param {func(void)} onAnswered 
 */
function checkAns(evt, correct, onAnswered) {
    evt.target.style.background = correct ? "green" : "red";
    onAnswered();
}

/**
 * answer button
 * @param {[correct:boolean,oAnswered:event,disabled:boolean]} params 
 * @returns component
 */
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

