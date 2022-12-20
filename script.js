// testing if console actually works
// console.log("yeehaw")

// geeksforgeeks.org/simple-tic-tac-toe-game-using-javascript/ makes the most sense but also isn't that DRY

// check for live game state
 const liveGameState = function () {
// declare TTT squares as variables & their set DOM
const b0 = document.getElementById("top-left").textContent
// reminding myself .textContent responds to type in html code
const b1 = document.getElementById("top-mid").textContent
const b2 = document.getElementById("top-right").textContent
const b3 = document.getElementById("mid-left").textContent
const b4 = document.getElementById("mid-mid").textContent
const b5 = document.getElementById("mid-right").textContent
const b6 = document.getElementById("bottom-left").textContent
const b7 = document.getElementById("bottom-mid").textContent
const b8 = document.getElementById("bottom-right").textContent

// declaring match 3's as arrays 
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

console.log(topRowStringify)
if (topRowStringify === `["x","x","x"]`) {
    document.querySelector("h2").textContent = "Player 1 won!"
}

        // if ((topRowStringify === `["x", "x", "x"]`) || (midRowStringify === `["x", "x", "x"]`) || (bottomRowStringify === `["x", "x", "x"]`) || (leftColumnStringify === `["x", "x", "x"]`) || (midColumnStringify === `["x", "x", "x"]`) || (rightColumnStringify === `["x", "x", "x"]`) || (diagonal1Stringify === `["x", "x", "x"]`) || (diagonal2Stringify === `["x", "x", "x"]`)) {
        // console.log(topRowStringify)
        // console.log(midRowStringify)
        // console.log(bottomRowStringify)
        // console.log(leftColumnStringify)
        // console.log(midColumnStringify)
        // console.log(rightColumnStringify)
        // console.log(diagonal1Stringify)
        // console.log(diagonal2Stringify)
        // document.querySelector("h2").textContent = "Player 1 won!"
    
    
        // } else if ((topRowStringify === `["o", "o", "o"]`) || (midRowStringify === `["o", "o", "o"]`) || (bottomRowStringify === `["o", "o", "o"]`) || (leftColumnStringify === `["o", "o", "o"]`) || (midColumnStringify === `["o", "o", "o"]`) || (rightColumnStringify === `["o", "o","o"]`) || (diagonal1Stringify === `["o", "o", "o"]`) || (diagonal2Stringify === `["o", "o", "o"]`)) {
        //     console.log("click here")
        // document.querySelector("h2").textContent = "Player 2 won!"
    
        // } else {
    
        // // document.querySelector("h2").textContent = "It's a draw."
    
        // }
    
}


// Setting the event handler & target whenever click to "x" or "o" event happens. This prevents adding multiple x's or o's to a single box. 
document.getElementById("top-left").onclick = fun2
function fun() {
    e.target.textContent = "x"
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

// checking win, loss or draw cases 


// try putting this in a function
// const fun3 = function () {
//     if ((topRowStringify === `["x", "x", "x"]`) || (midRowStringify === `["x", "x", "x"]`) || (bottomRowStringify === `["x", "x", "x"]`) || (leftColumnStringify === `["x", "x", "x"]`) || (midColumnStringify === `["x", "x", "x"]`) || (rightColumnStringify === `["x", "x", "x"]`) || (diagonal1Stringify === `["x", "x", "x"]`) || (diagonal2Stringify === `["x", "x", "x"]`)) {
//     console.log(topRowStringify)
//     console.log(midRowStringify)
//     console.log(bottomRowStringify)
//     console.log(leftColumnStringify)
//     console.log(midColumnStringify)
//     console.log(rightColumnStringify)
//     console.log(diagonal1Stringify)
//     console.log(diagonal2Stringify)
//     document.querySelector("h2").textContent = "Player 1 won!"


//     } else if (!(topRow === "o", "o", "o") || (midRow === "o", "o", "o") || (bottomRow === "o", "o", "o") || (leftColumn === "o", "o", "o") || (midColumn === "o", "o", "o") || (rightColumn === "o", "o","o") || (diagonal1 === "o", "o", "o") || (diagonal2 === "o", "o", "o")) {

//     document.querySelector("h2").textContent = "Player 2 won!"

//     } else {

//     document.querySelector("h2").textContent = "It's a draw."

//     }
// }
// Convert strings back to arrays by using split method?
// 