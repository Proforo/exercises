# D-03: Variable assignment

Building on the previous exercise, let's complete the same calculations, this time using variables.  

Recall that the scoring formula established in a previous exericise was to begin with `10000` points, subtract `50` pts for every second, subtract `200` for every missed whack.

1. Define a variable named `timeElapsed`, assigning it a starting value of `20`
2. Define a variable named `missCount`, assigning it a starting value of `5`
3. Write a `console.log()` statement to output the score using the values stored in the variables to complete the computation
   - If successful, the result should be `8000`
4. Update the `timeElapsed` value to `15` to see the score increase
   - If successful, the result should be `8250`
5. Update the `missCount` value to `6` to see the score decrease
   - If successful, the result should be `8050`


## Solution
```js
let timeElapsed = 20
let missCount = 5
console.log(10000 - (timeElapsed * 50) - (missCount * 200))

timeElapsed = 15
console.log(10000 - (timeElapsed * 50) - (missCount * 200))

missCount = 6
console.log(10000 - (timeElapsed * 50) - (missCount * 200))
```