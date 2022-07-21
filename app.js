// import functions and grab DOM elements
const guessingBox = document.getElementById('guessingBox');
const myGuess = document.getElementById('myGuess');
const predictButton = document.getElementById('predictButton');
const afterQuestion = document.getElementById('afterQuestion');
const answerText = document.getElementById('answerText');
const yourQuestion = document.getElementById('yourQuestion');

// let state
const fortune = [
    'A closed mouth gathers no feet',
    'If you look back, youll soon be going that way',
    'He who throws dirt is losing ground',
    'Dont behave with cold manners',
    'Dont forget you are always on our minds',
    'Fortune not found? Abort, Retry, Ignore',
    'That wasnt chicken',
    'I am worth a fortune',
    'You think its a secret, but they know',
];

predictButton.addEventListener('click', () => {
    showAnswer();
    whatYouGuessed();
    randomAnswer();
    randomFortune();
});

function whatYouGuessed() {
    const question = myGuess.value;
    answerText.textContent = question;
}

function showAnswer() {
    guessingBox.classList.add('hidden');
    afterQuestion.classList.remove('hidden');
}

function randomAnswer() {
    const randomAnswer = getRandomItem(fortune);
    answerText.textContent = randomAnswer;
}

function getRandomItem(array) {
    const randomIndex = Math.floor(Math.random() * fortune.length);
    const item = fortune[randomIndex];
    return item;
}

// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state
