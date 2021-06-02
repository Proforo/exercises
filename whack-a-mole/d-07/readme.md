# D-07: Document Elements

1. Use the `document.querySelector()` method to search the document for two existing elements, one with the `id` selector `#duration`, the other with selector `#missed`. Store each reference inidivually as the variable names `duration` and `missed`, respectively.
   - Place it directly under the existing line of code that is doing the same thing for the `#modal`
2. Write a new function named `writeToClock` that will receive a single number as its argument when called, representing the number of seconds elapsed in the game so far. Catch the incoming number into a variable named `sec`
   1. Assign the `sec` number to the `textContent` of the `duration` element in the `.info` bar at the top of the document
   2. Assign the same number to the `value` attribute of the same `duration` element using its `setAttribute()` method
   3. Update the `startGame` function to invoke the new `writeToClock` function, passing it the `timeElapsed` value immediately after it's assigned a value of `0`
   4. Update the `tickTock` function to also invoke the `writeToClock` function, passing it the `timeElapsed` value immediately after incrementing the value
3. Write a new function named `writeToMissed` that will receive a single number as its argument, representing the number of times the user clicked and missed whacking a mole. Catch the incoming number into a variable named `miss`
   1. Assign the `miss` number to the `textContent` of the `missed` element in the `.info` bar at the top of the document
   2. Assign the same number to the `value` attribute of the same `missed` element using its `setAttribute()` method
   3. Update the `startGame` function to invoke the new `writeToMissed` function, passing it the `missCount` value immediately after it's assigned a value of `0`
4. At the bottom of the existing `startGame` function, hide the modal so the game board can be seen. To the `moodal`, `add()` the `hide` class to the element's existing `classList`
