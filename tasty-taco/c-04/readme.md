# Exercise C-04: Box-model Layout

In this exercise, you will be making adjustments to the layout, within responsive media query break points.

Complete the following steps in CSS to complete the exercise:


## Part 1: Media Query - 40rem
1. At the bottom of the CSS stylesheet, under all current rules, write a `@media` query (break-point) that will target a `screen` viewport width of _at least_ `40rem`
1. To better suit the larger viewport width, within the new `@media` block, make the following changes that will affect the elements at the top of the `<main>`:
   1. Reduce the overlap that the top of the `.food-menu` has over the `.hero`, by overwriting the previously assignment `margin-top` value with the value `-5rem`
   1. Increase the `padding` above and below the `.slogan` to `12rem` by assigning new `padding-top` and `padding-bottom` values to the `.hero`.
      1. Because of the `margin-top: -5rem` set to the `.food-menu` below, you will need to add an extra `5rem` to the `padding-bottom` of the `.hero` to accommodate the overlap
   1. Write a single property to increase the `padding` within the `.menu-intro` to `8rem` vertically and `4rem` horizontally


## Part 2: Media Query - 60rem
1. Directly below the previous `@media` query, write a media query (break-point) that will target a `screen` viewport width of _at least_ `60rem`
1. Restrict the width of the `.navigation`, `.slogans` and `.food-menu` elements by doing the following:
   1. Set the `max-width` of the elements to a value of `80rem`
   1. Because these elements may have `padding` already assigned to them on the `left` and `right` side, change the `box-sizing` property for these elements to `border-box` so that the `padding` will not be added to the outside of the `80rem` width
   1. Horizontally center the elements when they hit their `max-width` by setting both their `margin-left` and `margin-right` to `auto`
      1. Remember that the `.food-menu` element has a `margin-top` already set to bring it over the `.hero`, so be sure not to overwrite that value here and assign `margin-left` and `margin-right` individually
1. Because the same properties were written into three different rules, make the project more maintainable by moving the properties from the previous step into a *new* rule (within the same `@media` breakpoint definition) that selects elements with a class of `.container` assigned to them through
   1. Add `container` to the class attribute value of `.navigation`, `.slogans` and `.food-menu` elements in `index.html` to apply the new layout width limitation
