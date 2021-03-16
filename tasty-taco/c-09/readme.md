# Exercise C-09: Flexbox

In this exercise, you will be making adjustments to the image elements that display the food items on the menu to optimize the file size for various viewport widths.

Complete the following steps in the HTML or CSS to complete the exercise:

## Part 1: Responsive flex (Menu)
Because the a flex container will only control its direct children, aligning the elements within the `.content-header` will require flexing multiple elements to get the items to align in a single row. Complete the following steps within the `@media` query for browsers with a viewport of `min-width:60rem`:

1. Write a rule to select elements with the class `.inline-nav`, giving the rule a single style declaration: `display: flex`. Apply the `inline-nav` class to the following elements (check the browser layout after each step to see how each is affecting the menu):
   1. Add the `inline-nav` class to the `<ul>` with the class of `.nav-list`
   1. Add the `inline-nav` class to the `<ul>` with the class of `.nav-sublist`
   1. To have the menu sub-list align with main list, add the `inline-nav` class to the `<li>` element that contains the `.nav-sublist` (it also holds the "Menu" anchor)
1. Now that the menu items are all in a single row, write a rule to select the `.nav-list a`, putting `1rem` space on the anchor's `padding-top`, `padding-bottom` and `padding-left` (leaving the `padding-right` at `0`)
   1. Try writing this as a single `padding` declaration
1. Remove the border lines from the `.nav-list` and the `.nav-list a` by setting both of their `border` values to `none`. 
 
The inline navigation is now complete. Put the Tasty Taco logo and the navigation list in a single row, complete the following steps in the same `@media` block:

1. Add the `inline-nav` class (written in the previous step of steps) to the `<nav>` element with the `navigation` class
1. Write a class to select the `.navigation` element, assigning its `justify-content` property the value `space-between` to put the `.logo` and `.nav-list` on opposing ends of the row
1. Complete the header bar by setting the `margin` to a value of `0` for the rules that select both the `.logo` and the `.nav-list` elements


## Part 2: Multi-level flex (Navigation)
1. As the viewport reaches the first responsive break point (`min-width: 40rem`) and more width is available, begin the process of putting multiple food items into a single row by wrapping the `article.menu-item` elements together within each `section.menu-category` in a new `<div>` element, with a `class=""` attribute value of `item-group`. To be more specific:
   1. Wrap the three `.menu-item` elements within `section#starters`
   1. Wrap the three `.menu-item` elements within `section#tacos`
   1. Wrap the one `.menu-item` element within `section#sdessert`
1. In the media query, write a rule that selects the three new `.item-group` elements, assigning their `display` property the value `flex`
   1. The `.menu-item` elements, being the only children elements of the new `.item-group` will all align horizontally themselves onto the same row when the viewport width exceeds `40rem`
1. Resize and wrap the elements within the `flex` container so that only two items are displayed per row when this breakpoint is active:
   1. Add `flex-basis: 40%` to the rule selecting `.menu-item` elements to ensure each item is at least `40%` of the flex container
   1. Assign `2rem` of space to both `margin-top` and `margin-bottom` for the `.menu-item` elements
   1. Allow elements within the container to wrap onto multiple lines for containers with more than two items, by adding `flex-wrap: wrap` to the `.item-group` rule definition (the flex container)
   1. To get the elements to center themselves using the remaining space on each row, add `justify-content: space-around` to the rule selecting `.item-group` elements
1. As the amount of available space increases past the next viewport breakpoint (`60rem`), update the `flex-basis` value assigned to `.menu-item` elements from `40%` to `25%`, allowing a third item to fit into the same row without wrapping to the next line


## Part 3: Vertical flex (Items)

Notice that the height of the `.menu-item` elements are different due to their varied description lengths. Assigning them the same height with an explicit `height` or `min-height` value may present various problems as the site content changes over time. A flex container used as a column instead of a row can achieve the desired affect and maintain scalability

1. In the `@media` query targeting viewports with `min-width: 40rem`, change the `display` property of the `.menu-item` rule to be a `flex` container
1. To invert the direction that the new flex container, set the `flex-direction` to a value of `column` (which overwrites the default `row` value) for the `.menu-item` elements
1. Force the `.item-description` to take all of the extra space left at the bottom of item and put it within the element, pushing its border down to the bottom, bu adding the declaration `flex-grow: 1` to the `.item-description` rule
   - Because all of the `.menu-item` elements exist within the `.item-group` flex, they all have the same height, set by the tallest flex item in the row, with the extra space available to distribute to the items within
