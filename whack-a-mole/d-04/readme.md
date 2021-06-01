# D-04: Template literals

Building on the previous exercise, let's complete the same calculations, this time using a template string to format the output in a more human-readable way.  

Recall that the scoring formula established in a previous exericise was to begin with `10000` points, subtract `50` pts for every second, subtract `200` for every missed whack.

1. Define a variable named `userName`, assigning it the starting value of the String `Alan Turing`
1. Define a variable named `timeElapsed`, assigning it a starting value of `20`
1. Define a variable named `missCount`, assigning it a starting value of `5`
1. Write a template string with the format below, replacing the capital letter words with the respective variable or calculation to complete the message, then output using `console.log()`:
   `NAME scored SCORE, missing MISSED in TIME seconds`
1. Rather than compute the score in the template string interpolator (`${}`), store the computed score in a variable named `totalScore` before outputting to the console


## Solution
```js
let timeElapsed = `Alan Turing`
let timeElapsed = 20
let missCount = 5
console.log(`${userName} scored ${10000 - (timeElapsed * 50) - (missCount * 200)}, missing ${missCount} in ${timeElapsed} seconds`)

let totalScore = 10000 - (timeElapsed * 50) - (missCount * 200)
console.log(`${userName} scored ${totalScore}, missing ${missCount} in ${timeElapsed} seconds`)
```