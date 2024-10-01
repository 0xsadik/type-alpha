// functional approach 

function hideElementById(hideid) {
    const id = document.getElementById(hideid);
    id.classList.add('hidden');
}

function showElementById(showid) {
    const sid = document.getElementById(showid);
    sid.classList.remove('hidden');
}


// keyboard background 

function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-[#F9BF97]');
    element.classList.add('text-white');
}

// button background remove 

function removeBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-[#F9BF97]');
    element.classList.add('text-black');
}

// capture score / life badge 
function getTextElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

function setTextElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}


function getElementTextById(elementId) {
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}


// game over 

function gameOver() {
    hideElementById('play-ground');
    showElementById('score-board');

    // update final score 
    // step - 1: get the final score 
    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('last-score', lastScore);

    // clear the keys backgrounds 
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}


// random alphabet function 

function getARandomAlphabet() {
    // create an alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    
    //get random index between 0 - 25 

    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    
    const alphabet = alphabets[index];
    // console.log(index, alphabet);
    return alphabet;

}