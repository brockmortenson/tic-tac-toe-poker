// const name = 'Brock'
// console.log(name)

const board = [];

function play(clickedId){
    const playerSpan = document.getElementById('player');
    const clickedElement = document.getElementById(clickedId);
    if (playerSpan.innerText === 'X'){
        playerSpan.innerText = 'O';
        clickedElement.innerText = 'X';
        board[clickedId] = 'X';
    } else {
        playerSpan.innerText = 'X';
        clickedElement.innerText = 'O';
        board[clickedId] = 'O';
    }
    console.log(board);


    const topLeft = board[0]
    const topCenter = board[1]
    const topRight = board[2]
    const middleLeft = board[3]
    const middleCenter = board[4]
    const middleRight = board[5]
    const bottomLeft = board[6]
    const bottomCenter = board[7]
    const bottomRight = board[8]

    if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight){
        alert(`${topLeft} is the winner!`)
        return;
    }

    if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight){
        alert(`${middleLeft} is the winner!`)
        return;
    }

    if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight){
        alert(`${bottomLeft} is the winner!`)
        return;
    }

    if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft){
        alert(`${topLeft} is the winner!`)
        return;
    }

    if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter){
        alert(`${topCenter} is the winner!`)
        return;
    }

    if (topRight !== undefined && topRight === middleRight && topRight === bottomRight){
        alert(`${topRight} is the winner!`)
        return;
    }

    if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight){
        alert(`${topLeft} is the winner!`)
        return;
    }

    if (bottomLeft !== undefined && bottomLeft === middleCenter && bottomLeft === topRight){
        alert(`${bottomLeft} is the winner!`)
        return;
    }

let boardFull = true
    for (let i = 0; i < 9; i++){
        if (board[i] === undefined){
            boardFull = false;
        }
    }
    if (boardFull === true){
        alert(`Cat's game, NO WINNER`)
    }
}

// const button = document.createElement('button')
// button.innerHTML = 'Play Again'
// let body = document.getElementsByTagName('body')[0]
// body.appendChild(button)
// button.addEventListener('click', function(){
//     document.getElementsByTagName('button').reset()
// })