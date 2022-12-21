// geeksforgeeks.org/simple-tic-tac-toe-game-using-javascript/ makes the most sense but also isn't that DRY

// Check for live game state
const liveGameState = function () {

// Declaring TTT squares as variables & their set DOM
const b0 = document.getElementById("top-left").textContent
const b1 = document.getElementById("top-mid").textContent
const b2 = document.getElementById("top-right").textContent
const b3 = document.getElementById("mid-left").textContent
const b4 = document.getElementById("mid-mid").textContent
const b5 = document.getElementById("mid-right").textContent
const b6 = document.getElementById("bottom-left").textContent
const b7 = document.getElementById("bottom-mid").textContent
const b8 = document.getElementById("bottom-right").textContent

// Seclaring match 3's as arrays 
const topRow = [b0, b1, b2]
const midRow = [b3, b4, b5]
const bottomRow = [b6, b7, b8]
const leftColumn = [b0, b3, b6]
const midColumn = [b1, b4, b7]
const rightColumn = [b2, b5, b8]
const diagonal1 = [b0, b4, b8]
const diagonal2 = [b2, b4, b6]

// Stringifying the arrays 
const topRowStringify = JSON.stringify(topRow)
const midRowStringify = JSON.stringify(midRow)
const bottomRowStringify = JSON.stringify(bottomRow)
const leftColumnStringify = JSON.stringify(leftColumn)
const midColumnStringify = JSON.stringify(midColumn)
const rightColumnStringify = JSON.stringify(rightColumn)
const diagonal1Stringify = JSON.stringify(diagonal1)
const diagonal2Stringify = JSON.stringify(diagonal2)

// Win or draw cases
// If Player 1 wins
if ((topRowStringify === `["x","x","x"]`) || (midRowStringify === `["x","x","x"]`) || (bottomRowStringify === `["x","x","x"]`) || (leftColumnStringify === `["x","x","x"]`) || (midColumnStringify === `["x","x","x"]`) || (rightColumnStringify === `["x","x","x"]`) || (diagonal1Stringify === `["x","x","x"]`) || (diagonal2Stringify === `["x","x","x"]`)) {
    
    document.querySelector("h2").textContent = "Player 1 won!"
 
 // If Player 2 wins   
 } else if ((topRowStringify === `["o","o","o"]`) || (midRowStringify === `["o","o","o"]`) || (bottomRowStringify === `["o","o","o"]`) || (leftColumnStringify === `["o","o","o"]`) || (midColumnStringify === `["o","o","o"]`) || (rightColumnStringify === `["o","o","o"]`) || (diagonal1Stringify === `["o","o","o"]`) || (diagonal2Stringify === `["o","o","o"]`)) {

    document.querySelector("h2").textContent = "Player 2 won!"
 
 // If no one wins   
 } else if ((b0 !== "") && (b1 !== "") && (b2 !== "") && (b3 !== "") && (b4 !== "") && (b5 !== "") && (b6 !== "") && (b7 !== "") && (b8 !== "")) {
    
    document.querySelector("h2").textContent = "It's a draw."
    
 } 
    
}
liveGameState()


// Setting the event handler & target whenever click to "x" or "o" event happens. This prevents adding multiple x's or o's to a single box. 
document.getElementById("top-left").onclick = fun2
function fun() {
    e.target.textContent = "x"
    e.target.style.fontSize = "64px"
}


document.getElementById("top-mid").onclick = fun2
function fun() {
    e.target.textContent = "x"
}

document.getElementById("top-right").onclick = fun2
function fun() {
    e.target.textContent = "x"
}

document.getElementById("mid-left").onclick = fun2
function fun() {
    e.target.textContent = "x"
}

document.getElementById("mid-mid").onclick = fun2
function fun() {
    e.target.textContent = "x"
}

document.getElementById("mid-right").onclick = fun2
function fun() {
    e.target.textContent = "x"
}

document.getElementById("bottom-left").onclick = fun2
function fun() {
    e.target.textContent = "x"
}

document.getElementById("bottom-mid").onclick = fun2
function fun() {
    e.target.textContent = "x"
}

document.getElementById("bottom-right").onclick = fun2
function fun() {
    e.target.textContent = "x"
}

document.getElementById("top-left").onclick = fun2
function fun() {
    e.target.textContent = "o"
}


document.getElementById("top-mid").onclick = fun2
function fun() {
    e.target.textContent = "o"
}

document.getElementById("top-right").onclick = fun2
function fun() {
    e.target.textContent = "o"
}

document.getElementById("mid-left").onclick = fun2
function fun() {
    e.target.textContent = "o"
}

document.getElementById("mid-mid").onclick = fun2
function fun() {
    e.target.textContent = "o"
}

document.getElementById("mid-right").onclick = fun2
function fun() {
    e.target.textContent = "o"
}

document.getElementById("bottom-left").onclick = fun2
function fun() {
    e.target.textContent = "o"
}

document.getElementById("bottom-mid").onclick = fun2
function fun() {
    e.target.textContent = "o"
}

document.getElementById("bottom-right").onclick = fun2
function fun() {
    e.target.textContent = "o"
}

// declared player turn
turn = 0
// preventing event mishaps & targeting each box
function fun2(e) {
    console.log(e.target)
    if (e.target.textContent === "") {
        //nested if block
        if (turn === 0) {
            e.target.textContent = "x"
            turn = 1
            // update current game status
            document.querySelector("h2").textContent = "It's Player 2's turn!"
            liveGameState()
        } else if (turn === 1) {
            e.target.textContent = "o"
            // switch turn
            turn = 0
            document.querySelector("h2").textContent = "It's Player 1's turn!"
            liveGameState()
        }
    } else {
        // apparently, no need to code here for the sake of nesting if blocks
    }
} 