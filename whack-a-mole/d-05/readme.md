# D-05: Functions and Scope

## Part 1: Info header

The `.info` element has already been given some layout styling, let's warm up with a quick positioning of that `<header>`, ensuring it stays fixed at the top of the document.

1. Apply a `fixed` position to the rule selecting the `.info` element
2. The element immediately collapses, so set its `width` to span `100%` of the viewport
3. Set the element to the top-left corner by assigning both the `top` and `left` properties a value of `0`
   - Remember, these properties measure the distance of the positioned element from the sides of where the element now orients (the viewport, for `fixed` elements)
1. Lastly, ensure the `.info` element stays above any other `position` content by assigning its `z-index` property a value of `1`


## Part 2: Modal

A "modal" (pronounced: mode-el) window is a state (or "mode") that appears above the standard content of a document, disabling the main content beneith it. An element with the class `modal` has been wrapped around the `table.leaderboard`. Let's build a modal.

1. Begin by writing a rule to select elements with a class attribute value of `modal`, then set it to have a translucent `background-color` of `rgb(0,0,0,0.5)`, so that users retain the context for where they were before the modal appeared
1. Change the `position` value of the `.modal` to `fixed`
1. Place the `.modal` in the top-left corner by setting the `top` and `left` properties to a measurement of `0`
1. Because the `z-index` of the `.info` element was set to `1`, higher than the default value of `0` currently assigned to the `z-index` of the `.modal`, the `.info` element appears above the `.modal`. Set the `z-index` value for the `.modal` to (at least) a value of `2`
1. Elements that are `fixed` or `absolute` will lose their shape if dimensions are not set via the box model. Set both the `height` and `width` of the `.modal` to a value of `100%` (which is with respect to the new "parent" for the `.modal` - _the viewport_)
1. Move the `.leaderboard` to the middle of the `.modal` by assigning the `flex` property to replace it's defauly `display` value, then set both `justify-content` (horizontal) and `align-items` (vertical) to a value of `center`
1. To finish off the modal, set its `cursor` back to the default value of `auto` so that the game cursor images are not present within the modal


## Part 3: Close button

Notice that the `.btn.close` is within the caption. Tables limit the type of elements allowed within it, with all content falling directly within either a `<td>`, `<th>`, or a `<caption>`. That said, the button can still be positioned relative to the `<table>`, given that `absolute` styling allows an element to be positioned to **any** of its ancestors - not necessarily just its parent

1. Start by setting up some styles before moving it into position. Write the following declaration to the rule that selects the `.close` element:
   1. Assign the `background-color` a value of `tomato`
   2. Reduce the `font-size` down to `1rem`
   3. Change the `font-family` to `helvetica, arial, sans-serif` to give the "x" a wider stance
   4. Set the `height` and `width` both to `1.5rem`
   5. Round the square into the circle with a `border-radius` of `50%`
   6. Give the button some depth with a `box-shadow` value to `0 0 1em rgba(0,0,0,0.5)`
1. Now that the `.close` button is styled, lets move it to the corner of the table by setting its `position` to `absolute`
1. Set the button to the top-right corner of the table using a `top` value of `2rem` and `right` to `-0.5rem`
1. The element winds up in the top right corner of the `.modal` because its the next ancestor element with a non-`static` `position`. Change that by assigning the `.leaderboard` a `position` of `relative`
