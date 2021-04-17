## Notes before starting
- The lists have been simplified from three levels, down to two


## Steps
1. Wrap the entirety of the content within each of the first-level `.todo` list-items in a seperate `<details>` element
   - This includes `.todo` items that have sub-task lists, as well as those without 
2. Within the details element, wrap only the name of that main task in a `<summary>` element
   - **Observe**: The `<details>` element becomes a functional dropdown, with the `<summary>` element as the toggle for exposing the additional content within
3. Add a class of `.task` to the `<summary>`, then write a rule to apply a heavier `font-weight` of `700`
4. To make styling within each `todo` element easier as you move forward, set the first one of the `<details>` blocks to be opened by default by adding an attribute of `open` to the `<details>` opening tag, giving it a value of `true`
   - This is a "Boolean attributes". Boolean attributes are ones which are assigned a value of either `"true"` or `"false"`. If there is no boolean attribute present, the default value is typically `"false"`
   - When setting a Boolean attributes to a value of `"true"`, the value itself is most often omitted and is activated by simply writing the name of the attribute in the opening tag, like this: `<details open>`
5. For all of the `<details>` elements that contain a subtask list, wrap the entire unordered list in `<section>` 
6. Below the "Sub-tasks" section, create another section to display notes for this task
   - Add a few sample `<p>` inside of this new `<section>` to give it some weight
7. Sections need headings, so add <h2> headings for each new section. Name them “Sub-tasks” and “Notes” respectively.
   1. Also add an `<h1>` heading to the top of the body, above the `.all-tasks` list that describes the entire list, perhaps a value of "Task List", or something similar
8. Add some color to the `<section>` elements by assigning each a `class` value of `taskinfo`
   1. Write a rule that selects the `.taskinfo` elements and assign them all a `background-color` of `rgba(255,255,255,0.15)`
      - Notice the layering affect that occurs with the translucent backgrounds when set to an opposing colour with low opacity
9. Add a new `<span>` element to each of the `<details>` task elements as its first child (directly before the `<summary>`), giving each the content `&check;` between the opening and closing `<span>` tags
   1. Test the page in your browser to ensure the `&check;` value converts to a checkmark character (✓). This is an HTML "special character" shortcode that will convert to a non-standard character when rendered by the browser.
   2. Add a class of `status` to each of the new `<span>` elements, then write a CSS rule that selects these `.status` elements, giving them each a `background-color` of `rgba(255,255,255,0.15)`, and the `color` of the text set to `transparent` (this will "hide" the checkmark)
   3. Directly below the `.status` rule you just wrote in CSS, add a new rule that will select `.status-complete` elements, giving it a `color` value of `rgb(255,255,255)`
      1. As a test, apply the `status-complete` class to at least a few of the `.status` elements, so that they will have both the `status` and `status-complete` class value. 
         - For those elements, you should observe the checkmark (seemingly) disappear due to the same element having *two* definitions for `color`. This happens because of a concept called "cascading" - something we will dig deeper on in an upcoming lesson.
   
   Notice that the new `.status` element does not appear ahead of the `<summary>` element. The browser will force certain elements into specific position due to their type. The `<summary>` within `<details>` is one such element.
