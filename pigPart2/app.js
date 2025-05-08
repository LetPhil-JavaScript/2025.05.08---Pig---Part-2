console.log("Welcome to Pig Part 2")

// Review
// ----- ,>
// let vs. const
// if and if/else statements
// classList.toggle()
// ----- <>

// Math.random()
// Give you a random decmal number between 0 and 1
// It's not, it doesnt include the actually "1"

// console.log(Math.random())

// Bigg number, multiply is something (number)
// console.log(Math.random() * 10)
// Still has messy decimal


// Random Numbers from You!
// ----- <>

//Shadow
// lucky number 7
// console.log("Shadow:", Math.random() * 7)

// William
// console.log("William:", Math.random() * 50);


// Math.floor
// Rounds DOWN to the nearest whole number
// console.log(Math.floor(4.9))
// console.log(Math.floor(4.0000001))

// Shadow
// console.log("Shadow:", Math.floor(Math.random() * 7))
// // William
// console.log("William", Math.floor(Math.random() * 50))
// Thanks
// console.log(Math.floor(Math.random() * 6) + 1);



//So, now we know this, how do we create dice?

// Thanks
// console.log("Dice:", Math.floor(Math.random() * 6) + 1);


// Magic 8 Ball
// const answers = [
//   "Yes!",
//   "No!",
//   "Maybe!",
//   "Try again later!",
//   "Definitely!",
//   "I wouldn't count on it.",
//   "Absolutely!",
//   "Ask again!"
// ]

// Thanks!
const answers = [
  "Yes!",
  "No!",
  "Maybe!",
  "Try again later!",
  "Definitely!",
  "I wouldn't count on it.",
  "Absolutely!",
  "Ask again!"
]

const randNum = Math.floor(Math.random() * answers.length) + 1;
const result = answers[randNum];

// console.log("Thanks:", result);

//ROG
const idx = Math.floor(Math.random() * 8) + 1;
// console.log(answers[idx])

//Shadow
// let randomNum = Math.floor(Math.random() * 7) +1
// const magic8Ball = answers[randomNum]
// console.log(magic8Ball)

// Shay
// const randomIndex = Math.floor(Math.random() * answers.length)
// console.log("Magic 8-Ball says:", answers[randomIndex])

// Player Turn!

let isPlayerOneTurn = true


function rollDice() {
    let dice = Math.floor(Math.random() *6 + 1)
    console.log("Dice rolled:", dice)

    if (dice === 1) {
        console.log("Rolled a 1, Switch Players!")
        // isPlayerOneTurn = !isPlayerOneTurn
        if (isPlayerOneTurn === true){
            isPlayerOneTurn = false;
        } else {
            isPlayerOneTurn = true
        }
    }
}

if (isPlayerOneTurn) {
    console.log("Player 1's Turn")
} else {
    console.log("Player 2's Turn")
}

rollDice()


// Turn it over to you!
// Players Dice, Dice goes player total
// Bank there points
// Switch players

// If player rolls 1, points are 0 for that session

