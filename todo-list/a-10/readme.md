## Notes before starting
- The lists have been simplified from three levels, down to two


## Steps
1. Wrap the entirety of the content within each of the first-level `.todo` list-items in a `<details>` element
   - This includes `.todo` items that have sub-task lists, as well as those without 
1. Within the details element, wrap only the name of that specific task in a `<summary>` element
   - **Observe**: The `<details>` element becomes a functional dropdown, with the `<summary>` element as the toggle for exposing the additional content within
1. Add a class of `.task` to the `<summary>`, then write a rule to apply a heavier `font-weight` of `700`
1. To make styling within each `todo` element easier as you move forward, set at least one of the `<details>` blocks to be opened by default by adding an attribute of `open` to the `<details>` opening tag, giving it a value of `true`
   - "Boolean attributes" are ones which are assigned a value of either `"true"` or `"false"`. If the attribute is absent, the default value is typically `"false"`
   - When setting a Boolean attributes to a value of `"true"`, the value itself is most often omitted and is activated by simply writing the name of the attribute in the opening tag, like this: `<details open>`
1. For all of the `<details>` elements that contain a subtask list, wrap the entire unordered list in `<section>` 
1. Below the "Sub-tasks" section, create another section to display notes for this task
   - Add a few sample `<p>` inside of this new `<section>` to give it some weight
1. Sections need headings, so add `<h2>` headings for each of the new sections, with "Sub-tasks" and "Notes" respectively
   1. Also add an `<h1>` heading to the top of the body, above the `.all-tasks` list that describes the entire list, perhaps a value of "Task List", or something similar
1. Add some color to the `<section>` elements by assigning each of them a `class` of `taskinfo`
   1. Write a rule that selects the `.taskinfo` elements and assign them all a `background-color` of `rgba(255,255,255,0.15)`
      - Notice the layering affect that occurs with the translucent backgrounds when set to an opposing colour with low opacity
1. Add a `<span>` to each of the `<details>` task elements, directly before the `<summary>`, with `&check;` as its content.
   1. Test to ensure the `&check;` converts to a checkmark character (✓) in the browser. This is an HTML "special character" shortcode.
   1. Add a class of `status` to each new `<span>` and then write a rule that selects elements with the `.status` class, giving them a `background-color` of `rgba(255,255,255,0.15)`, and the `color` to be `transparent`, hiding the checkmark
   1. Directly below the `.status` rule, write a new rule to select `.status-complete` elements that will change the `color` back to `rgb(255,255,255)`
      1. Apply this class to at least a few of the `.status` elements, in addition to the existing `status` class. You should see the checkmark disappear because of the double definition of `color` and "cascading" - a concept we will dig deeper on in an upcoming lesson.
   
   Notice that the new `.status` element does not appear ahead of the `<summary>` element. The browser will force certain elements into specific position due to their type. The `<summary>` within `<details>` is one such element.
