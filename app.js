import isYes from './test/is-yes.js';

const Results = document.getElementById ('yourResults');
const button = document.getElementById ('quizbutton');

button.addEventListener('click', () => {
    console.log ('button works');


const name = prompt('What is your name?');
const confirmation = confirm(`${name}, are you sure you want to take the quiz?`)
if(confirmation === false) return;

const answer1 = prompt('Should you touch the bone?');
const answer2 = prompt('Did I graduate from University of Woof?');
const answer3 = prompt('Real dog?');
let count = 0
if(!isYes(answer1)) count += 1;
if(isYes(answer2)) count += 1;
if(isYes(answer3)) count += 1;


yourResults.textContent= `${name}, You got ${count} correct`;
})