let isFirstPlayer = true;
let firstPlayerPoints = 0;
let secondPlayerPoints = 0;
let isThereAWinner = false;
let firstPlayerName = '';
let secondPlayerName = '';

resetBoard();

function playGame() {
    document.getElementsByClassName('wrapper')[0].style.visibility = 'visible';
    document.getElementsByClassName('formWrapper')[0].style.visibility = 'hidden';
    let h1ToRemove = document.getElementById('startHeading');
    h1ToRemove.remove();
    console.log('enable tic-tac-toe');
    firstPlayerName = document.getElementById('playerOne').value;
    secondPlayerName = document.getElementById('playerTwo').value;
    if (firstPlayerName != null && firstPlayerName != '') {
        document.getElementById('firstPlayerName').innerHTML = firstPlayerName;
    }
    else {
        firstPlayerName = 'Player 1';
        document.getElementById('firstPlayerName').innerHTML = firstPlayerName;
    }
    
    if (secondPlayerName != null && secondPlayerName != '') {
        document.getElementById('secondPlayerName').innerHTML = secondPlayerName;
    }
    else {
        secondPlayerName = 'Player 2';
        document.getElementById('secondPlayerName').innerHTML = secondPlayerName;
    }
    
    document.getElementById('playerTurn').innerHTML = firstPlayerName;
}

function firstButton() {
    let button = document.getElementById('firstButton');
    if (button.innerHTML == 'X' || button.innerHTML == 'O') {
        console.log('This block is marked! Try again somewhere else!')
    }
    else {
        if (isFirstPlayer) {
            console.log('First player have just marked!')
            button.innerHTML = 'X';
            isFirstPlayer = false;
            document.getElementById('playerTurn').innerHTML = secondPlayerName;
        }
        else {
            console.log('Second player have just marked!')
            button.innerHTML = 'O';
            isFirstPlayer = true;
            document.getElementById('playerTurn').innerHTML = firstPlayerName;
        }
    }
    checkForWinnerOrEndGame();
}

function secondButton() {
    let button = document.getElementById('secondButton');
    if (button.innerHTML == 'X' || button.innerHTML == 'O') {
        console.log('This block is marked! Try again somewhere else!')
    }
    else {
        if (isFirstPlayer) {
            console.log('First player have just marked!')
            button.innerHTML = 'X';
            isFirstPlayer = false;
            document.getElementById('playerTurn').innerHTML = secondPlayerName;
        }
        else {
            console.log('Second player have just marked!')
            button.innerHTML = 'O';
            isFirstPlayer = true;
            document.getElementById('playerTurn').innerHTML = firstPlayerName;
        }
    }
    checkForWinnerOrEndGame();
}

function thirdButton() {
    let button = document.getElementById('thirdButton');
    if (button.innerHTML == 'X' || button.innerHTML == 'O') {
        console.log('This block is marked! Try again somewhere else!')
    }
    else {
        if (isFirstPlayer) {
            console.log('First player have just marked!')
            button.innerHTML = 'X';
            isFirstPlayer = false;
            document.getElementById('playerTurn').innerHTML = secondPlayerName;
        }
        else {
            console.log('Second player have just marked!')
            button.innerHTML = 'O';
            isFirstPlayer = true;
            document.getElementById('playerTurn').innerHTML = firstPlayerName;
        }
    }
    checkForWinnerOrEndGame();
}

function fourthButton() {
    let button = document.getElementById('fourthButton');
    if (button.innerHTML == 'X' || button.innerHTML == 'O') {
        console.log('This block is marked! Try again somewhere else!')
    }
    else {
        if (isFirstPlayer) {
            console.log('First player have just marked!')
            button.innerHTML = 'X';
            isFirstPlayer = false;
            document.getElementById('playerTurn').innerHTML = secondPlayerName;
        }
        else {
            console.log('Second player have just marked!')
            button.innerHTML = 'O';
            isFirstPlayer = true;
            document.getElementById('playerTurn').innerHTML = firstPlayerName;
        }
    }
    checkForWinnerOrEndGame();
}

function fifthButton() {
    let button = document.getElementById('fifthButton');
    if (button.innerHTML == 'X' || button.innerHTML == 'O') {
        console.log('This block is marked! Try again somewhere else!')
    }
    else {
        if (isFirstPlayer) {
            console.log('First player have just marked!')
            button.innerHTML = 'X';
            isFirstPlayer = false;
            document.getElementById('playerTurn').innerHTML = secondPlayerName;
        }
        else {
            console.log('Second player have just marked!')
            button.innerHTML = 'O';
            isFirstPlayer = true;
            document.getElementById('playerTurn').innerHTML = firstPlayerName;
        }
    }
    checkForWinnerOrEndGame();
}

function sixthButton() {
    let button = document.getElementById('sixthButton');
    if (button.innerHTML == 'X' || button.innerHTML == 'O') {
        console.log('This block is marked! Try again somewhere else!')
    }
    else {
        if (isFirstPlayer) {
            console.log('First player have just marked!')
            button.innerHTML = 'X';
            isFirstPlayer = false;
            document.getElementById('playerTurn').innerHTML = secondPlayerName;
        }
        else {
            console.log('Second player have just marked!')
            button.innerHTML = 'O';
            isFirstPlayer = true;
            document.getElementById('playerTurn').innerHTML = firstPlayerName;
        }
    }
    checkForWinnerOrEndGame();
}

function seventhButton() {
    let button = document.getElementById('seventhButton');
    if (button.innerHTML == 'X' || button.innerHTML == 'O') {
        console.log('This block is marked! Try again somewhere else!')
    }
    else {
        if (isFirstPlayer) {
            console.log('First player have just marked!')
            button.innerHTML = 'X';
            isFirstPlayer = false;
            document.getElementById('playerTurn').innerHTML = secondPlayerName;
        }
        else {
            console.log('Second player have just marked!')
            button.innerHTML = 'O';
            isFirstPlayer = true;
            document.getElementById('playerTurn').innerHTML = firstPlayerName;
        }
    }
    checkForWinnerOrEndGame();
}

function eighthButton() {
    let button = document.getElementById('eighthButton');
    if (button.innerHTML == 'X' || button.innerHTML == 'O') {
        console.log('This block is marked! Try again somewhere else!')
    }
    else {
        if (isFirstPlayer) {
            console.log('First player have just marked!')
            button.innerHTML = 'X';
            isFirstPlayer = false;
            document.getElementById('playerTurn').innerHTML = secondPlayerName;
        }
        else {
            console.log('Second player have just marked!')
            button.innerHTML = 'O';
            isFirstPlayer = true;
            document.getElementById('playerTurn').innerHTML = firstPlayerName;
        }
    }
    checkForWinnerOrEndGame();
}

function ninthButton() {
    let button = document.getElementById('ninthButton');
    if (button.innerHTML == 'X' || button.innerHTML == 'O') {
        console.log('This block is marked! Try again somewhere else!')
    }
    else {
        if (isFirstPlayer) {
            console.log('First player have just marked!')
            button.innerHTML = 'X';
            isFirstPlayer = false;
            document.getElementById('playerTurn').innerHTML = secondPlayerName;
        }
        else {
            console.log('Second player have just marked!')
            button.innerHTML = 'O';
            isFirstPlayer = true;
            document.getElementById('playerTurn').innerHTML = firstPlayerName;
        }
    }
    checkForWinnerOrEndGame();
}

function checkForWinnerOrEndGame() {
    button1 = document.getElementById('firstButton');
    button2 = document.getElementById('secondButton');
    button3 = document.getElementById('thirdButton');
    button4 = document.getElementById('fourthButton');
    button5 = document.getElementById('fifthButton');
    button6 = document.getElementById('sixthButton');
    button7 = document.getElementById('seventhButton');
    button8 = document.getElementById('eighthButton');
    button9 = document.getElementById('ninthButton');


    if (button1.innerHTML == 'X' && button2.innerHTML == 'X' && button3.innerHTML == 'X') {
        button1.style.background = 'green';
        button2.style.background = 'green';
        button3.style.background = 'green';
        firstPlayerPoints++;
        isThereAWinner = true;
    }
    else if (button1.innerHTML == 'O' && button2.innerHTML == 'O' && button3.innerHTML == 'O') {
        button1.style.background = 'green';
        button2.style.background = 'green';
        button3.style.background = 'green';
        secondPlayerPoints++;
        isThereAWinner = true;
    }
    else if (button3.innerHTML == 'X' && button6.innerHTML == 'X' && button9.innerHTML == 'X') {
        button3.style.background = 'green';
        button6.style.background = 'green';
        button9.style.background = 'green';
        firstPlayerPoints++;
        isThereAWinner = true;
    }
    else if (button3.innerHTML == 'O' && button6.innerHTML == 'O' && button9.innerHTML == 'O') {
        button3.style.background = 'green';
        button6.style.background = 'green';
        button9.style.background = 'green';
        secondPlayerPoints++;
        isThereAWinner = true;
    }
    else if (button7.innerHTML == 'X' && button8.innerHTML == 'X' && button9.innerHTML == 'X') {
        button7.style.background = 'green';
        button8.style.background = 'green';
        button9.style.background = 'green';
        firstPlayerPoints++;
        isThereAWinner = true;
    }
    else if (button7.innerHTML == 'O' && button8.innerHTML == 'O' && button9.innerHTML == 'O') {
        button7.style.background = 'green';
        button8.style.background = 'green';
        button9.style.background = 'green';
        secondPlayerPoints++;
        isThereAWinner = true;
    }
    else if (button1.innerHTML == 'X' && button4.innerHTML == 'X' && button7.innerHTML == 'X') {
        button1.style.background = 'green';
        button4.style.background = 'green';
        button7.style.background = 'green';
        firstPlayerPoints++;
        isThereAWinner = true;
    }
    else if (button1.innerHTML == 'O' && button4.innerHTML == 'O' && button7.innerHTML == 'O') {
        button1.style.background = 'green';
        button4.style.background = 'green';
        button7.style.background = 'green';
        secondPlayerPoints++;
        isThereAWinner = true;
    }
    else if (button3.innerHTML == 'X' && button5.innerHTML == 'X' && button7.innerHTML == 'X') {
        button3.style.background = 'green';
        button5.style.background = 'green';
        button7.style.background = 'green';
        firstPlayerPoints++;
        isThereAWinner = true;
    }
    else if (button3.innerHTML == 'O' && button5.innerHTML == 'O' && button7.innerHTML == 'O') {
        button3.style.background = 'green';
        button5.style.background = 'green';
        button7.style.background = 'green';
        secondPlayerPoints++;
        isThereAWinner = true;
    }
    else if (button1.innerHTML == 'X' && button5.innerHTML == 'X' && button9.innerHTML == 'X') {
        button1.style.background = 'green';
        button5.style.background = 'green';
        button9.style.background = 'green';
        firstPlayerPoints++;
        isThereAWinner = true;
    }
    else if (button1.innerHTML == 'O' && button5.innerHTML == 'O' && button9.innerHTML == 'O') {
        button1.style.background = 'green';
        button5.style.background = 'green';
        button9.style.background = 'green';
        secondPlayerPoints++;
        isThereAWinner = true;
    }
    else if (button2.innerHTML == 'X' && button5.innerHTML == 'X' && button8.innerHTML == 'X') {
        button2.style.background = 'green';
        button5.style.background = 'green';
        button8.style.background = 'green';
        firstPlayerPoints++;
        isThereAWinner = true;
    }
    else if (button2.innerHTML == 'O' && button5.innerHTML == 'O' && button8.innerHTML == 'O') {
        button2.style.background = 'green';
        button5.style.background = 'green';
        button8.style.background = 'green';
        secondPlayerPoints++;
        isThereAWinner = true;
    }
    else if (button4.innerHTML == 'X' && button5.innerHTML == 'X' && button6.innerHTML == 'X') {
        button4.style.background = 'green';
        button5.style.background = 'green';
        button6.style.background = 'green';
        firstPlayerPoints++;
        isThereAWinner = true;
    }
    else if (button4.innerHTML == 'O' && button5.innerHTML == 'O' && button6.innerHTML == 'O') {
        button4.style.background = 'green';
        button5.style.background = 'green';
        button6.style.background = 'green';
        secondPlayerPoints++;
        isThereAWinner = true;
    }

    if (isThereAWinner) {
        button1.disabled = true;
        button2.disabled = true;
        button3.disabled = true;
        button4.disabled = true;
        button5.disabled = true;
        button6.disabled = true;
        button7.disabled = true;
        button8.disabled = true;
        button9.disabled = true;
    }

    if(!isThereAWinner && button1.innerHTML != '' && button2.innerHTML != '' &&
    button3.innerHTML != '' && button4.innerHTML != '' &&
    button5.innerHTML != '' && button6.innerHTML != '' &&
    button6.innerHTML != '' && button7.innerHTML != '' &&
    button8.innerHTML != '' && button9.innerHTML != ''){
        button1.disabled = true;
        button2.disabled = true;
        button3.disabled = true;
        button4.disabled = true;
        button5.disabled = true;
        button6.disabled = true;
        button7.disabled = true;
        button8.disabled = true;
        button9.disabled = true;
    }

    document.getElementById('firstPlayerPoints').innerHTML = firstPlayerPoints;
    document.getElementById('secondPlayerPoints').innerHTML = secondPlayerPoints;
}

function resetBoard() {
    isFirstPlayer = true;
    isThereAWinner = false;
    document.getElementById('playerTurn').innerHTML = firstPlayerName;

    document.getElementById('firstButton').innerHTML = '';
    document.getElementById('firstButton').disabled = false;
    document.getElementById('firstButton').style.background = 'rgb(238, 238, 238)';

    document.getElementById('secondButton').innerHTML = '';
    document.getElementById('secondButton').style.background = 'rgb(238, 238, 238)';
    document.getElementById('secondButton').disabled = false;

    document.getElementById('thirdButton').innerHTML = '';
    document.getElementById('thirdButton').style.background = 'rgb(238, 238, 238)';
    document.getElementById('thirdButton').disabled = false;

    document.getElementById('fourthButton').innerHTML = '';
    document.getElementById('fourthButton').style.background = 'rgb(238, 238, 238)';
    document.getElementById('fourthButton').disabled = false;

    document.getElementById('fifthButton').innerHTML = '';
    document.getElementById('fifthButton').style.background = 'rgb(238, 238, 238)';
    document.getElementById('fifthButton').disabled = false;

    document.getElementById('sixthButton').innerHTML = '';
    document.getElementById('sixthButton').style.background = 'rgb(238, 238, 238)';
    document.getElementById('sixthButton').disabled = false;

    document.getElementById('seventhButton').innerHTML = '';
    document.getElementById('seventhButton').style.background = 'rgb(238, 238, 238)';
    document.getElementById('seventhButton').disabled = false;

    document.getElementById('eighthButton').innerHTML = '';
    document.getElementById('eighthButton').style.background = 'rgb(238, 238, 238)';
    document.getElementById('eighthButton').disabled = false;

    document.getElementById('ninthButton').innerHTML = '';
    document.getElementById('ninthButton').style.background = 'rgb(238, 238, 238)';
    document.getElementById('ninthButton').disabled = false;
}

