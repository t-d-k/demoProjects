// import  markMaxes  from './markMaxes.js';
// import markMaxes from "./markMaxes.js";
// myMod.func()


LINE_WIDTH = 2;

var ctx;

var width;
var height;

var pixWidth;
var pixHeight;
var graphColour = "blue";

var infoEl;

let max_x = 45;
let min_x = -45;
const MAX_Y = 1;
const MIN_Y = -1;
const STEP_DELAY = 100; // in ms
var objective = null;

function objectiveFn(x) {
    // return (Math.sin(x / 4) + ((((x * 13) % 13) / 13) / 7)) * 10 / (x * x + 5)
    return (Math.sin(x / 2) * 10) / (x * x + 5);
}
function objectiveFn2(x) {
    return (1 / (Math.abs(Math.tan(x / 10)) + 1)) + (x / 200) - 0.5;
}
//////////////////////////////
// utility fns
//////////////////////////////
function updateMaxX() {
    let el = document.getElementById('maxXIn');
    max_x = Number(el.value);
    pixWidth = (max_x - min_x) / width; // pixel width in units 
}
function updateMinX() {
    let el = document.getElementById('minXIn');
    min_x = Number(el.value);
    pixWidth = (max_x - min_x) / width; // pixel width in units 
}
function updateColour() {
    let el = document.getElementById('colorIn');
    graphColour = el.value;
}
function reDraw() {
    plot(objective);
}
function doClear() {
    ctx.clearRect(0, 0, width, height);
}

function convToPixelX(xUnits) {
    return (xUnits - min_x) / pixWidth;
}

function convToPixelY(yUnits) {
    // canvas origin is top left - convert to math style increasing y is up
    return (MAX_Y - yUnits) / pixHeight;
}

function plot(func) {

    var x, y, prevy;

    ctx.strokeStyle = graphColour;
    ctx.lineWidth = LINE_WIDTH;

    ctx.beginPath();
    var lastOffScale = true;
    // loop over each pixel value
    for (x = min_x; x < max_x; x += pixWidth) {

        y = func(x);
        var thisOffScale = false;
        if (y > MAX_Y) {
            y = MAX_Y;
            thisOffScale = true;
        }
        if (y < MIN_Y) {
            y = MIN_Y;
            thisOffScale = true;
        }
        // don't draw lines along graph edges
        if (lastOffScale && thisOffScale) {
            ctx.moveTo(convToPixelX(x), convToPixelY(y));
        } else {
            // are we inside
            console.assert((y >= MIN_Y) && (y <= MAX_Y));

            // show discontinuities as gaps
            if (Math.abs(prevy - y) > (MAX_Y - MIN_Y) * (1 / 3)) {
                ctx.moveTo(convToPixelX(x), convToPixelY(y));
            } else {
                ctx.lineTo(convToPixelX(x), convToPixelY(y));
            }
            lastOffScale = thisOffScale;
        }
        prevy = y;
    }
    ctx.stroke();
}
function doDrawLine(eX, eY, colour, wide) {
    ctx.beginPath();
    ctx.strokeStyle = colour;
    ctx.lineWidth = wide ? LINE_WIDTH + 1 : LINE_WIDTH;
    // ctx.lineWidth = Math.trunc(1 / pixWidth);
    if (wide) ctx.lineWidth++;

    ctx.moveTo(convToPixelX(eX), convToPixelY(0));
    const actY = eY < 0 ? convToPixelY(eY) - LINE_WIDTH : convToPixelY(eY) + LINE_WIDTH// try not to overwrite graph
    ctx.lineTo(convToPixelX(eX), actY);
    ctx.stroke();
}


function doDrawPointer(eX, eY, colour, wide) {
    ctx.beginPath();
    ctx.strokeStyle = colour;
    ctx.fillStyle = colour;
    // ctx.lineWidth = wide ? LINE_WIDTH + 1 : LINE_WIDTH;
    const halfWidth = wide ? 6 : 5;
    const hTri = wide ? 11 : 10;
    const xpos = convToPixelX(eX);
    const ypos = height;
    ctx.moveTo(xpos - halfWidth, ypos);
    ctx.lineTo(xpos, ypos - hTri);
    ctx.lineTo(xpos + halfWidth, ypos);
ctx.fill();
    // drawTriangle(convToPixelX(eX),height,5,10)

    
}

const delay = ms => new Promise(res => setTimeout(res, ms));


function findMax() {
    console.assert(objective != null);
    markMaxes(objective);
}
function hillClimb() {
    console.assert(objective != null);
    doHillClimb(objective);
}
function simAnneal() {
    console.assert(objective != null);
    doSimAnneal(objective);
}

function setObjFn(fnId) {
    switch (fnId) {
        case 1: objective = objectiveFn; break;
        default: objective = objectiveFn2; break;
    }

    const fnSpan = document.getElementById('fn');
    fnSpan.textContent = objective;

}

function init() {

    const canvas = document.getElementsByTagName('canvas')[0];
    canvas.width = (window.innerWidth * 0.9);
    width = canvas.width;
    height = canvas.height;
    ctx = canvas.getContext("2d");
    canvas.style.backgroundColor = "white";
    ctx.lineWidth = LINE_WIDTH;

    pixHeight = (MAX_Y - MIN_Y) / height;// pixel height in units

    // two example function plots
    // plot((x)=>Math.tan(Math.cos(x/2) * 10),"#F88",1)

    document.getElementById('maxBtn').onClick = findMax;
    document.getElementById('drawBtn').onClick = reDraw;

    infoEl = document.getElementById('info');

    updateMaxX();
    updateMinX();
    // plot(objective2, "red")
    // plot((x) => objective2(x), "black")
    setObjFn(1);
    reDraw();
}



