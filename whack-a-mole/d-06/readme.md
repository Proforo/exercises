# D-06

1. To seed the leaderboard, create and object literal to represent the data found in the leaderboard table, then store the object as a variable named `leader` just under the existing variable definitions for `timeElapsed` and `missCount`. Including the following parameters:
   - `name`: A String that includes the first and last name of the player
   - `secs`: A Number (which may be decimal) representing the number of sections it took to clear the board
   - `miss`: A Number representing the number of times the user clicked, but missed a mole
   - `score` the aggregate score based on the seconds elapsed and missed whacks. Use the formula previously established to ensure the value is accurate
2. Write a `console.log` message to test your ability to access object property data, logging the following message to the console (replacing the given data with your custom sample data):
   > Ada Lovelace scored 9200, missing 1 in 12 seconds


## Starting
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


## Solution
```js
let timeElapsed
let missCount

let leader = {
   name: `Ada Lovelace`, 
   secs: 12, 
   miss: 1, 
   score: 9200
}
console.log(`${leader.name} scored ${leader.score}, missing ${leader.miss} in ${leader.secs} seconds`)

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