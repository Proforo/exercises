# D-02: Datatypes and Operators

## Whack-a-mole score calculator

Using JavaScript's arithmetic operators, write the formula to calculate the user's score for each of the following example games of "Whack-a-mole" below, given the following criteria. For each of the example games, write two `console.log()` statements, one with the user's name (a String) and one with the formula to compute the score (a Number):

### Criteria
- A user begins the game with 10000 total points
- For each second that passes, the user will lose 50 points
- For each mole missed, the user will lose 200 points

### Example Games
1. Grace Hopper cleared the board in **18** seconds, missing **3** moles
2. Tim Berners-Lee cleared the board in **21** seconds, missing **2** moles
3. Ada Lovelace cleared the board in **16** seconds, missing **4** moles

### Solution Output
The final results in the browser's console should look as follows:
```
Grace Hopper
8500
Tim Berners-Lee
8550
Ada Lovelace
8400
```

### Solution

#### Code
```js
console.log(`Grace Hopper`)
console.log(10000 - (18 * 50) - (3 * 200)) // 8500

console.log(`Tim Berners-Lee`)
console.log(10000 - (21 * 50) - (2 * 200)) // 8550

console.log(`Ada Lovelace`)
console.log(10000 - (16 * 50) - (4 * 200)) // 8400
```

#### Notes
Here is the general formula used:
```js
10000 - (time * 50) - (missed * 200)
```


----

**NOTE: THE FOLLOWING IS EXTRA. IF THE ABOVE IF SUFFICIENT, IGNORE BELOW**

----



## Grade calculator

A student has a course outline with the following distribution of grades:

| Tables           | Grade | Out of | Weight |
| ---------------- |:-----:|:------:| ------:|
| Assignment: HTML | 18    | 20     |    25% |
| Assignment: CSS  | 23    | 25     |    25% |
| Assignment: JS   | 25    | 30     |    25% |
| Quizzes          | 18    | 20     |    15% |
| Exercises        | 9     | 10     |    10% |


### Question:
What is the student's final score as a percentage out of 100?

### Answer:
console.log( 18/20*.25 + 23/25*.25 + 24/30*.25 + 18/20*.15 + 9/10*.1 + 100)


## Other ideas:
- Whack-a-mole score calculation? Calculate the score by starting with a maximum score of 10000, then subtracting `50` for every second of `time` and subtracting `200` for every `missed` whack. Once calculated, `return` the number from the function back to where it was called
- Quarterback stats (QB rating?)
- Something with firly complex calucations, that doesn't need a variable
- Consider something where order of operation matters, so they can use the `()` syntax