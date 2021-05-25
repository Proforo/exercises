

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