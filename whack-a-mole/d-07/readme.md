# D-07: Document Elements

1. Use the `querySelector()` method to search the `document` for two elements, one with the selector `#duration`, the other with selector `#missed`. Store each one as the variable names `duration` and `missed`, respectively
1. Write a function named `writeToClock` that will take a single number as its argument, representing the number of seconds elapsed in the game so far.
   1. Assign the number to the `textContent` of the `duration` element in the `.info` bar at the top of the document
   1. Assign the same number to the `value` attribute of the same `duration` element using its `setAttribute()` method
   1. Update the `startGame` function to invoke the new `writeToClock` function, passing it the `timeElapsed` value immediately after it's assigned a value of `0`
   1. Update the `tickTock` function to also invoke the `writeToClock` function, passing it the `timeElapsed` value immediately after incrementing the value
1. Write a function named `writeToMissed` that will take a single number as its argument, representing the number of times the user clicked and missed whacking a mole.
   1. Assign the number to the `textContent` of the `missed` element in the `.info` bar at the top of the document
   1. Assign the same number to the `value` attribute of the same `missed` element using its `setAttribute()` method
   1. Update the `startGame` function to invoke the new `writeToMissed` function, passing it the `missCount` value immediately after it's assigned a value of `0`
1. At the bottom of the existing `startGame` function, hide the modal so the game board can be seen. To the `moodal`, `add()` the `hide` class to the element's existing `classList`
