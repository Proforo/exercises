# D-05: Functions and Scope

1. Write a function named `startGame` that will be called when a game begins, or restarts, that will set the `timeElapsed` and `missCount` variables to the number `0`
1. Write a function named `tickTock` that will be called on a steady interval (every 100 milliseconds) to maintain the game clock and determine how long it took to whack all of the moles. Each time the function is called, add `0.1` to the `timeElapsed` variable
1. Write a function named `calculateScore` that will be passed two arguments when called and will return a game score
   1. The first argument value should be stored into a parameter named `time`
   1. The second argument value should be stored into a parameter named `missed`
   1. Calculate the score by starting with a maximum score of 10000, then subtracting `50` for every second of `time` and subtracting `200` for every `missed` whack. Once calculated, `return` the number from the function back to where it was called
To help test the `calculateScore` function, here are the expected results when passing these specific arguments:

```js
calculateScore(10, 10)  // 7500
calculateScore(25, 20)  // 4750
calculateScore(5, 15)   // 6750
```



## Complete

```js
let timeElapsed
let missCount

let startGame = () => {
	timeElapsed = 0
	missCount = 0
}

let tickTock = () => {
	timeElapsed += .1
}

let calculateScore = (time, missed) => {
	return 10000 - (time * 50) - (missed * 200)
}
```
