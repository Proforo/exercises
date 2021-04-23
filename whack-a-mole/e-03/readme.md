## E-03: Booleans and Conditions

1. Modify the `toggleMoles` function to have a condition that will only `.toggle()` the `mole` class on/off of the randomly selected hole, if the selected number `whichMole` is less than the total number of `.hole` that have `:not()` been `.whacked`
   - Remember that `holes`, the variables containing the results of `querySelectorAll()` will behave much like an Array, thus will have a `length` parameter that will store the number of items in an Array (ie, the number of holes available in this case)
1. Add an `else if` block to the previous condition statement, that will catch all cases where the `length` of the number of non-mole holes is less-than-or-equal-to `0` (meaning, no holes are left to pop up a mole)
   - When this condition is met, call the `itsGameOver()` function that's been defined to wrap up the UI
