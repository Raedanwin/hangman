const wordArray = ['Apple', 'Human', 'Animal', 'Pikachu', 'Abyss', 'Guitar', 'Elephant'];
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let guesses = [];

let wordChoice = () => {
    let newWord = wordArray[Math.floor(Math.random() * wordArray.length)]
    return newWord;
}
let chosenWord = wordChoice();

let calculateUnderscores = () => {
    for (let i = 0; i <= chosenWord.length; i++) {
        let under = document.createElement('div');
        under.innerText = '_';
        under.setAttribute('class', 'letters');
        under.setAttribute('id', i);
        let underDiv = document.getElementById('underscores');
        console.log(under);
        underDiv.appendChild(under);
    } 
}

let displayLetters = () => {
    for (let j = 0; j <= chosenWord.length; j++) {
        let word = [];
        word = chosenWord.length;
        console.log(word);
    }
}

 
let displayWord = () => {
    document.getElementById('display').innerHTML = chosenWord;
}