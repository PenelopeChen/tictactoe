// testing if console actually works
// console.log("yeehaw")

// geeksforgeeks.org/simple-tic-tac-toe-game-using-javascript/ makes the most sense but also isn't that DRY


// declare TTT squares as variables & their set DOM
const b0 = document.getElementById("top-left").value
// reminding myself .value responds to type in html code
const b1 = document.getElementById("top-mid").value
const b2 = document.getElementById("top-right").value
const b3 = document.getElementById("mid-left").value
const b4 = document.getElementById("mid-mid").value
const b5 = document.getElementById("mid-right").value
const b6 = document.getElementById("bottom-left").value
const b7 = document.getElementById("bottom-mid").value
const b8 = document.getElementById("bottom-right").value

// declaring match 3's as arrays 
const topRow = [b0, b1, b2]
const midRow = [b0, b1, b2]
const bottomRow = [b0, b1, b2]
const leftColumn = [b0, b1, b2]
const midColumn = [b0, b1, b2]
const rightColumn = [b0, b1, b2]
const diagonal1 = [b0, b1, b2]
const diagonal2 = [b0, b1, b2]

// Stringifying the arrays 
const topRowStringify = JSON.stringify(topRow)
console.log(topRowStringify)

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
        } else if (turn === 1) {
            e.target.textContent = "o"
            // switch turn
            turn = 0
            document.querySelector("h2").textContent = "It's Player 1's turn!"
        }
    } else {
        // apparently, no need to code here for the sake of nesting if blocks
    }
} 

// checking win, loss or draw cases 

if (topRow === "x", "x", "x") {
    window.alert("Player 1 won!")
}

// if ((topRow === "xxx") || (midRow === "xxx") || (bottomRow === "xxx") || (leftColumn === "xxx") || (midColumn === "xxx") || (rightColumn === "xxx") || (diagonal1 === "xxx") || (diagonal2 === "xxx")) {
//     document.getElementById("h2").textContent = `Player ${1} won!`
// // checking if Player 2 won 
// } else if ((topRow === "ooo") || (midRow === "ooo") || (bottomRow === "ooo") || (leftColumn === "ooo") || (midColumn === "ooo") || (rightColumn === "ooo") || (diagonal1 === "ooo") || (diagonal2 === "ooo")) { 
//     document.getElementById("h2").textContent = `Player ${2} won!`
// } else {
//     document.getElementById("h2").textContent = `It's a draw.`
// }