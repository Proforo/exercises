## Notes before starting
- (Rephrase this in a way that better explains this simplifies the process) You may find it easier to temporarily hide all but one of the list items, so that all future work can be committed to a single element, that can later be duplicated modified to to hold the appropriate task content.


## Steps
1. Write a CSS rule that would select elements with a class attribute value of `.all-items`
2. Add a class attribute value of `all-items` to the top-level `<ol>` element (the task list)
3. Remove the markers from the `.all-items` ordered-list by changing the `list-style-type` from its current value of `decimal` to a value of `none`
4. At the top of the CSS document, add a rule to select the `body`
   1. Assign the color `rgb(30,30,35)` to the `background-color` of the `body`
   2. For the foreground text, set the `color` to `rgb(255,255,255)`
5. For each of the highest-level `list-items` ("Complete this exercise", "Take out the dog", etc.) add a class of `todo`, then write a corresponding rule in CSS.
   1. Assign the translucent color `rgba(255,255,255,0.15)` to the `background-color` of the `.todo` element
