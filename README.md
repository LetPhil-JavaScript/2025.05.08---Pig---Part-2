# 🐷 Pig Game - Part 2

Welcome to **Part 2** of building the classic game **Pig** with JavaScript!

In this lab, we practiced key JavaScript concepts and worked toward building a simple dice game where two players take turns rolling, banking points, and racing to 100!

---

### 📚 Topics Covered

* `let` vs `const`
* `if` and `if/else` statements
* `classList.toggle()` (review)
* `Math.random()` — generating random numbers
* `Math.floor()` — rounding numbers down
* Arrays and indexing
* Basic state tracking (player turn swapping)

---

### 🎲 Main Concepts Practiced

#### Random Numbers

* `Math.random()` generates a decimal between 0 (inclusive) and 1 (exclusive).
* To simulate dice rolls, we multiplied by 6 and **added 1**:

```javascript
Math.floor(Math.random() * 6) + 1
```

#### Magic 8-Ball

* We built a simple "Magic 8-Ball" using:

  * An array of possible answers
  * A random index to select a random answer

```javascript
const answers = [
  "Yes!",
  "No!",
  "Maybe!",
  "Try again later!",
  "Definitely!",
  "I wouldn't count on it.",
  "Absolutely!",
  "Ask again!"
];

const randomIndex = Math.floor(Math.random() * answers.length);
console.log("Magic 8-Ball says:", answers[randomIndex]);
```

#### Player Turn Switching

* We used a boolean `isPlayerOneTurn` to track whose turn it is.
* If a player rolls a `1`, they lose their temporary points and we **switch players**.
* Player switching was done by flipping the boolean:

```javascript
if (isPlayerOneTurn === true) {
    isPlayerOneTurn = false;
} else {
    isPlayerOneTurn = true;
}
```

---

### How To Run

1. Clone the repository.
2. Open the `.js` file inside a browser console or attach it to an HTML file.
3. Watch the logs to see dice rolls, Magic 8-Ball answers, and player turn switching!

---

### What's Next?

In the next class, we'll continue by:

* Allowing players to **bank** points
* Adding **buttons** for "Roll" and "Hold"
* Tracking **scores** and checking for a **winner**
* Improving the **user interface** to make it interactive and fun!

This project will slowly grow into a **complete playable Pig game!**

---

### pecial Thanks

Thanks to all the attendes for their awesome examples, lucky numbers, and jokes while learning random numbers!

---
