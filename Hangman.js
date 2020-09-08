const wordArray = ['Apple', 'Human', 'Animal', 'Pikachu', 'Abyss', 'Guitar', 'Elephant'];

let wordChoice = () => {
    let newWord = wordArray[Math.floor(Math.random() * wordArray.length)]
    return newWord;
}
let chosenWord = wordChoice();

let calculateUnderscores = () => {
    for (let i = 0; i <= chosenWord.length; i++) {
        let under = document.createElement('div');
        under.innerText = '_';
        let underDiv = document.getElementById('underscores')
        console.log(under);
        underDiv.appendChild(under);
    }
}
// let underscoreCount = 
//calculateUnderscores();
 
let displayWord = () => {
    document.getElementById('display').innerHTML = chosenWord;
}