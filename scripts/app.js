
function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;
    // console.log(' player pressed: ', playerPressed);
    if (playerPressed === 'Enter') {
        play();
    }

    // stop game immediately
    if(playerPressed === 'Escape') {
        gameOver();
    }

    // get the expected to press 
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
    // console.log(playerPressed, expectedAlphabet)
    

    // check the alphabet matched or not 
    if (playerPressed === expectedAlphabet) {


        const currentScore = getTextElementValueById('current-score'); 
        const updateScore = currentScore + 1;
        setTextElementValueById('current-score', updateScore);


        // console.log('you got a point!'); 

        // // update score 
        // // step - 1: get the current score 
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);
        // // step - 2: increase the score by 1
        // const newScore = currentScore + 1;
        // // step -3 : show the updated score 
        // currentScoreElement.innerText = newScore;

        // // start a new round!
        // console.log('you have pressed correctly', expectedAlphabet);
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else {
        console.log('you missed! you have lost a life' );

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        // gameover 
        if (updatedLife === 0) {
            gameOver();
        }



        // // step - 1: get the current life numebr 
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // // step - 2: reduce the life count 
        // const newLife = currentLife - 1;
        // // step - 3: display the updated life count 
        // currentLifeElement.innerText = newLife;
    }
}

document.addEventListener('keyup', handleKeyboardKeyUpEvent);


function continueGame() {
    // step - 1:- generate a random alphabet 
    const alphabet = getARandomAlphabet();
    // console.log('your random alphabet', alphabet);

    // set randomly generated alphabet 

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;


    // set background color 
    setBackgroundColorById(alphabet);
}



function play() {
    // hide the home screen [ to hide screen add hidden class ] 
    // const homeSection = document.getElementById('home-screen');
    // // console.log(homeSection);
    // homeSection.classList.add('hidden');
    
    // // show the playground 

    // const playgroundSection = document.getElementById('play-ground');
    // playgroundSection.classList.remove('hidden');



    // functional approach

    hideElementById('home-screen');
    hideElementById('score-board');
    showElementById('play-ground');

    // reset score and life 
    setTextElementValueById('current-life', 3);
    setTextElementValueById('current-score', 0);
    continueGame();

}