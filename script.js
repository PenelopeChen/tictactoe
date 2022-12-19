// testing if console actually works
console.log("yeehaw")

// geeksforgeeks.org/simple-tic-tac-toe-game-using-javascript/ makes the most sense but also isn't that DRY

// declare TTT squares as variables & their set DOM
const b0 = document.getElementById("top-left")
const b1 = document.getElementById("top-mid")
const b2 = document.getElementById("top-right")
const b3 = document.getElementById("mid-left")
const b4 = document.getElementById("mid-mid")
const b5 = document.getElementById("mid-right")
const b6 = document.getElementById("bottom-left")
const b7 = document.getElementById("bottom-mid")
const b8 = document.getElementById("bottom-right")

// need to input x's & o's using .addEventListener, onclick & inner.HTML/text.Content

// declaring match 3's as arrays (might need to fix this)
let topRow = [b0, b1, b2]
let midRow = [b0, b1, b2]
let bottomRow = [b0, b1, b2]
let leftColumn = [b0, b1, b2]
let midColumn = [b0, b1, b2]
let rightColumn = [b0, b1, b2]
let diagonal1 = [b0, b1, b2]
let diagonal2 = [b0, b1, b2]
