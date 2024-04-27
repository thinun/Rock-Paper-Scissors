function computerMove() {
    let computer_move = Math.random()
    if (computer_move >= 0 && computer_move <= 1 / 3) {
        computer_move = 'Rock'
    } else if (computer_move > 1 / 3 && computer_move <= 2 / 3) {
        computer_move = 'Paper'
    } else if (computer_move > 2 / 3 && computer_move <= 1) {
        computer_move = 'Scissors'
    }
    return computer_move
}

function rock() {
    let user_move = 'Rock'
    result(user_move, computerMove())
}

function paper() {
    let user_move = 'Paper'
    result(user_move, computerMove())
}

function scissors() {
    let user_move = 'Scissors'
    result(user_move, computerMove())

}
let user_win=0
let user_lose=0
let user_tie=0
function result(user_move, computer_move) {
    if (user_move === computer_move) {
        document.getElementById('game-score').innerText = `Your move is ${user_move}, Computer move is ${computer_move}`
        document.getElementById('result-text').innerText = `Tie!!`
        user_tie++
    } else if (user_move === 'Rock' && computer_move === "Scissors") {
        document.getElementById('game-score').innerText = `Your move is ${user_move}, Computer move is ${computer_move}`
        document.getElementById('result-text').innerText = `You Win!`
        user_win++
    } else if (user_move === 'Paper' && computer_move === 'Rock') {
        document.getElementById('game-score').innerText = `Your move is ${user_move}, Computer move is ${computer_move}`
        document.getElementById('result-text').innerText = `You Win!`
        user_win++
    } else if (user_move === 'Scissors' && computer_move === 'Paper') {
        document.getElementById('game-score').innerText = `Your move is ${user_move}, Computer move is ${computer_move}`
        document.getElementById('result-text').innerText = `You Win!`
        user_win++
    } else {
        document.getElementById('game-score').innerText = `Your move is ${user_move}, Computer move is ${computer_move}`
        document.getElementById('result-text').innerText = `You Lose!!!`
        user_lose++
    }
    score()
}


function score(){
    document.getElementById('result-text').innerText=`Win ${user_win} , Loses ${user_lose}, Ties ${user_tie}`
}

function resetScore(){
    user_win=0
    user_lose=0
    user_tie=0
    document.getElementById('game-score').innerText="Lets Play!!"
    document.getElementById('result-text').innerText=`Win ${user_win} , Loses ${user_lose}, Ties ${user_tie}`
}