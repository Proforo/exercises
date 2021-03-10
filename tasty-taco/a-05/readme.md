
# Exercise A-05: Let's get styling

In this exercise, you will begin applying styling through color, both to element `background-color`, and through the `color` of the text. 

Complete the following steps in both HTML and CSS (as indicated) to complete the exercise.

## Part 1: Type selectors
1. Setup the default colors for the page, replacing the `<body>` default `black` on `transparent`, but writing a rule to select the `body`, then giving it a `background-color` value of `rgb(255, 255, 255)` (white) and a `color` value of `rgb(20,20,20)` (off-black) for the text
1. By default, anchors are styled `blue` to emphasize them within a paragraph of text. As these will be menu anchors in a clear menu-looking structure, let's simply replace the default colour scheme. Write a rule to select all `a` elements, then set their `background-color` to a value of `rgb(203, 68, 33)` (a burnt orange) and their `color` to a value of `rgb(255, 255, 255)` for the text.
   - Before adding the `color` value, take the opportunity to consider why the `<a>` does not simply inherit the `color` value from the body, the way most other elements do. The browser has a specific definition already set for anchors, and by the rules of cascading (something we'll learn a bit more about in a future lesson), the `a` has too be styled specifically to overwrite it


## Part 2: Class selectors
1. Write a rule that will select all elements with the class `.active`, that can then be applied to an anchor, updating its styling to make it clear this anchor's `href` is the same page that we're currently viewing. Within that rule, set the `background-color` to a value of `rgb(255, 173, 50)` (a golden yellow) and the `color` a value of `rgb(20, 20, 20)`, then assign the `active` class to the `class=""` attribute of the anchor wrapping around the text "Menu" in the HTML document
   - Notice we're assigning the anchor the same color as the body's text `color`. There's another way to give the `<a>` the same color as it's ancestors (in this case, the body's `color` value). Assign the value `inherit` to the `color` property of the anchor rule. Although explicitly setting the colour makes sense here because of the specific background color applied, this technique may come in handy in a future example. Try it out!
1. There are three (3) `<strong>` elements that are used to provide important information for each category of the menu. Rather than styling by type, write a rule that will select elements with the class `.callout`, giving the elements a `background-color` with the value `rgb(255, 173, 50)` and a `color` with the value `rgb(20, 20, 20)`. Once complete, apply the `callout` class to all three `<strong>` elements in the HTML document
   - While it's not specifically necessary to assign the `color` value here, as it happens to be the same color value as is set and inherited from the `<body>`. However, consider that decisions down the road may result in a change to the body's styling, which with affect this element - perhaps not what we wanted. This helps safeguard against that case if we have a specific styling combination in mind that's independent of what the default text color is currently
1. Finally, write a rule to target all elements with the class `.item-price`, simply giving those elements the `color` of `rgb(203, 68, 33)`. Apply the new `item-price` class to **only** the four (4) `<data>` elements that are directly below `<h3>` food item names
   - This is a great example of applying a style to some elements and not others, of the same perceived type. In this case, the two `<data>` elements within the `.callout` don't specifically need the additional colour accent. In future, we could give all prices the same class and specifically style them differently, depending on the element's branch/context; this type of descendent selection is something we discuss in a future lesson.
