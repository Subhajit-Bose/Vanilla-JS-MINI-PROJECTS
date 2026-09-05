// Winning Number
let number = parseInt(Math.random() * 100 + 1) 

const guessNo = document.querySelector("#guessField")
const submit = document.body.querySelector("#subt")
const lowOrHi = document.body.querySelector(".lowOrHi")
const guesses = document.body.querySelector(".guesses")
const remaining = document.body.querySelector(".lastResult")
const playAgain = document.body.querySelector('.resultParas')

const nw = document.createElement('p')

let arr = []
let GamePlay = true 
let count = 10

if(GamePlay)
{
    
    submit.addEventListener('click' , (e) => {
        e.preventDefault()
        let guess = parseInt(guessNo.value)
        console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(g){
    if( isNaN(g) )
    {
        alert("Please give a valid number")
    }
    if( g <= 0)
    {
        alert('Please give a number larger than 0')
    }
    else if ( g > 100 )
    {
        alert('Please give a number in the appropiate range')
    }
    else
    {
        if (count === 1)
        {
            arr.push(g);
            count--;
            checkGuess(g);
            endGame();

        }
        else{
            arr.push(g);
            count--;
            checkGuess(g);
        }
    }

}

function checkGuess(g)
{
    if ( g === number )
    {
        dispMsg("Congrats! You guessed it right! Win")
        endGame()
    }
    else if ( g > number )
    {
        dispMsg("Alas! You guessed it too high")
        midGame();
    }
    else 
    {
        dispMsg("Alas! You guessed it too low")
        midGame()
    }
}

function midGame()
{
    guessNo.value = "";
    guesses.innerHTML = arr
    remaining.innerHTML = `${count}`
}

function dispMsg(str)
{
    let msg = document.createTextNode(str)
    lowOrHi.innerHTML = str;
}


function endGame() 
{
    // guessNo.value = ''
    // arr = [];
    // count = 10;

    // guesses.innerHTML = arr
    // remaining.innerHTML = `${count}`

    nw.innerHTML = `<button id="Restart"> Restart </button>`
    playAgain.appendChild(nw)
    document.body.querySelector("#Restart").addEventListener('click' , (e) => {
        GamePlay = false;
        newGame();
    })
}

function newGame(){
    guessNo.value = ''
    arr = [];
    count = 10;

    guesses.innerHTML = arr
    remaining.innerHTML = `${count}`

    playAgain.removeChild(nw)
    number = parseInt(Math.random() * 100 + 1)
    GamePlay = true;

}