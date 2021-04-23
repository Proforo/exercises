# D-09: Build-in Objects & Documentation

1. Because of the way JavaScript handles decimal precision, it's important to round numbers for presentation when decimals are involved in the calculation of a variable.
   1. In the `writeToClock` function, ensure both `sec` variables (being written to `textContent` and to `value` via `setAttribute()`) are rounded to a single decimal place using `toFixed()`
1. The `return` value from the `calculateScore` function is also open to the same decimal precision issues. Before returning the calculation, do the following:
   1. Get the results of the formula to compute the score and use the `toFixed()` method to set the result to have a single decimal place
   1. Because `toFixed()` converts the Number to a String, before returning the final result from the function, convert the result of the formula back to a Number using the `Number()` constructor method, which can take a string of digits and decimals and convert it to a Number
1. When taking input from the user interface, it's wise too ensure there is no extra whitespace characters before or after the text. Use the `trim()` method within the `saveScore` function to remove extra white spaces from the input string received from `yourname.value`
1. The moles will be randomly selected to pop-up using the `toggleMoles` function. Currently the `whichMole` variable is populated with a random number between `0` and `6.9999...` (including all decimal numbers), but should be a integer (no decimal) between `0` to `6`. Use the `Math.floor()` method to round _down_ the random number to an integer
