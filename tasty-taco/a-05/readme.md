
# Exercise A-05: Let's get styling

In this exercise, you will begin applying styling through color, both to element `background-color`, and through the `color` of the text. 

Complete the following steps in both HTML and CSS (as indicated) to complete the exercise.

## Part 1: Type selectors
1. Setup the default colors for the page by replacing the default `black` (text) on `transparent` (background) for the `<body>`
   1. Begin by writing a rule to select the `body` element
   2. In the new rule, set the `background-color` to a value of `rgb(255, 255, 255)` (white)
   3. Also set the `color` property to a value of `rgb(20,20,20)` (off-black)
2. By default, anchors are styled with the color `blue` to have them stand-out within a paragraph of text. Replace the default colour scheme for the existing anchors, which will make-up the "menu" of the page. 
   1. Write a rule to select all `a` elements
   2. In the new rule, set the `background-color` of the selected elements to a value of `rgb(203, 68, 33)` (a burnt orange)
   3. Also set the text `color` of those elements to a value of `rgb(255, 255, 255)`

   Before adding the `color` value, take the opportunity to consider why the `<a>` does not simply inherit the `color` value from the `body` rule, the way most other elements do. 
   - The browser has a specific definition already set for anchors because they are functional (linking to another page). By the rules of cascading (something we'll learn a bit more about in a future lesson), to overwrite a specific element default, the `<a>` element has to be styled directly to overwrite the default value - inheriting the color is simply not specific enough to get the job done


## Part 2: Class selectors

1. To better indicate to the user which page they are viewing, let's add additional styling instructions to one of the `<a>` elements to help it stand out
   1. Write an empty CSS rule that will select all elements with a class attribute value of `.active`
   2. Within that rule, set the `background-color` to a value of `rgb(255, 173, 50)` (a golden yellow)
   3. Then set the `color` property to a value of `rgb(20, 20, 20)`. 
   4. Once complete, add the `active` class to the `class=""` attribute of the `<a>` that is wrapping around the word "Menu" in the HTML document
   5. Notice we're assigning the same `color` value to the anchor as the text of the `<body>`. There's another way to give the `<a>` the same color as it's ancestors (in this case, the `color` property of the `body`). Assign the value `inherit` to the `color` property of the anchor rule. 
      - Although explicitly setting the `color` makes sense here because of the specific `background-color` applied, this technique may come in handy in a future example. Try it out!

2. There are three (3) `<strong>` elements that are used to provide important information for each category of the menu
   1. Rather than styling by type, write a rule that will select elements with the class `.callout`
   2. Give the elements a `background-color` with the value `rgb(255, 173, 50)`
   3. Change the `color` property, giving it the value `rgb(20, 20, 20)`
   4. Once complete, apply the `callout` class to all three `<strong>` elements in the HTML document
   
   While it's not specifically necessary to assign the `color` value here because it happens to be the same `color` value as is set and inherited from the `<body>` rule. However, consider that decisions down the road may result in a change to the `<body>` styling which may affect this element - perhaps not what we intended. This helps safeguard against that case if we have a specific styling combination in mind that's independent of what the default text color is currently

3. Finally, let's get the prices of each product to stand out from the rest of the copt.
   1. Write a rule to target all elements with the class `.item-price`
   2. Assign the `color` of these elements to be `rgb(203, 68, 33)` 
   3. Apply the new `item-price` class to **only** the four (4) `<data>` elements that directly follow the `<h3>` food item names
  
   This is a great example of applying a style to some elements and not others, despite being the same type of content. In this case, the two `<data>` elements within the `.callout` don't specifically need the additional colour accent. In future, we could give all prices the same `class` value and specifically style them differently, depending on the element's branch/context; this type of advanced descendent-based selection is something we will discuss in a future lesson.
