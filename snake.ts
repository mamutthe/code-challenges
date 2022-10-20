import { clear } from "console"

const log = console.log
let fX:number = 0
let fY:number = 0 
let posX:number = 0
let posY:number = 0

function print () {
    let board:any[][] = []
    board = [...Array(12)].map(()=>[...Array(24)])
    board[posY][posX] = true
    board.forEach(row => {
        log(row.map(cell => cell ? 'x' : '-').join(' '))
    })
}

function clearConsole () {
    process.stdout.write('\x1Bc')
}


function moveSnake () {
    if(fX > 0) {
        posX++
    } else if(fX < 0) {
        posX--
    } else if(fY > 0) {
        posY++
    } else if(fY < 0) { 
        posY--
    }

    if(posX > 23) {
        posX = 0
    } else if(posX < 0) {
        posX = 23
    } else if(posY > 11) {
        posY = 0
    } else if(posY < 0) {        
        posY = 11
    }
}

setInterval(() => {
    if (Math.random() > 0.5) {
        fX = 1
        fY = 0
    } else {
        fY = 1
        fX = 0
    }
    moveSnake()
    clearConsole()
    print()
}, 200)