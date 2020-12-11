import { colors } from './colors';
import { randomIntegerFromInterval } from './random-number';


const startBtnRef = document.querySelector('[data-action="start"]');
const stopBtnRef = document.querySelector('[data-action="stop"]');
const bodyRef = document.querySelector('body');


let onStart = false;
let intervalId = null;


startBtnRef.addEventListener('click', onChangeColorBody);
stopBtnRef.addEventListener('click', offChangeColorBody);


function onChangeColorBody() {
   
    if (onStart) {
        return
    };
    
    intervalId =  setInterval(getColor, 1000);
    onStart = true;

};

function offChangeColorBody() {
    clearInterval(intervalId);
    onStart = false;
}


function getColor() {
    let value = randomIntegerFromInterval(1, 5);
    let bodyColor = colors[value];
   
    bodyRef.style.backgroundColor = bodyColor;
    
}


