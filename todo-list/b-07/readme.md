
1. Set the default `font` for the `<body>`, which will inherit down to the content elements, with the following values:
   1. `font-style` set to `normal`
   1. `font-weight` set to `400`
   1. `font-size` set to `1rem`
   1. `font-family` set to any font you desire
      1. Try a fun Google Font
      1. A simple font stack of `system-ui, sans-serif` will use your computer's default font, or will select a `sans-serif` in the few older browsers who may not recognize the `system-ui` font correctly
   1. Set a default `line-height` to `1.5`
1. After setting each of the previous properties as individual declarations, incorporate all five properties into a single `font` declaration
1. Set the `text-align` property of the `<h1>` to `center`
1. For the `<h2>` elements, reduce their `font-size` down to 0.8rem (80% of the default size), `text-transform` the text to be fully `uppercase`, and low-light the `color` of the text to rgba(255,255,255,0.50)
1. Within the `<summary>` elements, add an inline element that will hold the due date for the task. Because this will be a time and/or date, using a `<time>` element is appropriate. (You may opt to leave this off of some items, as not all tasks will have a deadline)
   1. As a placeholder, add today's date and time written any way you prefer, for example: `Jan 1st @ 12:00a`
   1. Add a `datetime` attribute to the `<time>` element to represent that time in a standard format. For the above time, use a value of `1970-01-01 00:00:0.000`
      - To read more about the possible `datetime` formats, check out [the MDN documentation for the `<time>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time#valid_datetime_values)
1. Add a class of `due` to the new `<time>` elements and style the rule that selects them with the following properties:
   1. Continue the translucent layering, by setting a `background-color` of `rgba(255,255,255,0.15)
   1. Decrease the `font-weight` back down to `400`
   1. Reduce the `font-size` to 80% of the default by setting a value of `0.8rem`
   1. Space it away from the other <summary> content using a `margin-left` of `0.5rem`
   1. Set a small `border-radius` of `0.25rem` to round the corners just slightly

   Spacing inline elements vertically can be trickier. Note the way that the smaller `.due` text still lines up with the bigger `<summary>` text beside it on the `baseline`.
1. Adjust the `vertical-align` of the `.due` element to `middle` to see it move up slightly to the vertical center of the line
   - Because of drop-casing on lower case letters, the "middle" doesn't appear to be perfect vertical center for every font-families
   - `vertical-align` can also be set with numbers, positive will move up, negative down. You may optionally try a number like `0.1rem` and adjust up or down until the elements appears where you decide it looks best
1. Add `padding` around the text of the `.due` element to give its background some space to be seen
   1. First, try a `padding` of `0.5rem` around all sides. Notice that vertically the padding appears fine, but horizontally, it does not increase the height of the element. "Inline" elements like `<time>` elements will apply padding visually, but will not allow the flow of text to be disrupted by adjusted heights
   1. Set the `padding` to be `0` on the `top` and `button` and `0.25rem` on the `left` and `right`. 
   1. This time, attempt to increase the height of the visible parts of the element by changing the `line-height` to be a very high value, like `4`. Notice again, the line height doesn't stretch the background as you may have expected, but it still appears to be creating space for the line, oddly.
   1. To solve this, change the element's `display` property, so that it's not only `inline`, but is instead an `inline-block` element. This will allow both `line-height` or `padding` to properly be applied as expected
      - Changing the `display` property is something that will be covered in an upcoming lesson in far more detail. If you're uneasy about setting the `display` property at this point, simply using the `padding` method and return here after that lessons to review and compare methods
   1. Complete this spacing for this newly converted `inline-block` element by setting its `line-height` to `1.5` 
      - Similar results can be had by setting `padding-top` and `padding-bottom` to `0.2rem`, and `line-height` to `1`.
1. To show that a `.task` is complete at a glance, write a new rule that selects elements with the class `.task-complete` **directly below** the existing definition for `.task`
   1. To show the task has been completed, put `line-through` as the element's `text-decoration`, as well as reducing the `opacity` to `0.5` (50%)
   1. Apply the `task-complete` class to the elements who have already had the `status-complete` class applied to their checkbox
