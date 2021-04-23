# E-04: Event Delegation

1. Modify the existing `grassWasClicked` function to accept an Event argument, by readying a parameter with the name `event`
1. Within the function body, store the `target` from the `event` parameter variable (it holds the element was who clicked to trigger this event) as a variable `whack`
1. Because this function will be called with any click of the grass, regardless of whether there is a `.hole` or not, write a condition statement that will check whether the `whack` value ("target") `.matches()` a `.mole:not(.whacked)`
   - This advanced selector will select `.mole` elements that are not (yet) `.whacked`
   - Within the condition statement, `add()` the `whacked` class to the `target` element's existign `classList`
1. Add an `else` statement to the condition that will handle the case where the `target` does not match an un-whacked mole.
   - If this occurs, increment the `missCount` variably by `+1` so indicate a "miss"
   - Update the "Missed" score within the `.info` by invoking the `whiteToMissed()` function, passing the `missCount` variable as the argument

After completing this exercise, the game should be fully playable!!
