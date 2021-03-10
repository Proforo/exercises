

1. As with most layouts, begin by removing the default `margin` applied to the `body`, setting the value to `0`
1. As the `.all-tasks` list will not be treated as a traditional list with markers, remove its `padding-left` by setting it to a value of `0`
1. The list is now touching the outer edge of the browser viewport. There are a number of ways to space this away from the edge, and future changes may require a chance in application method, but adding a `margin-left` and `margin-right` of `1rem` to the sides of the `.all-tasks` list, would get the job done easily for the time being
1. Expand on the existing `.todo` rule, by creating some spacing within (`padding`) and around (`margin`)
   1. Use the `padding` single-declaration shortcut to set the `top` and `bottom` to a value of `0`, while the `left` and `right` are both set to `1rem`
   1. Use the `margin` single-declaration shortcut to set the `top` and `bottom` to a value of `1rem`, while the `left` and `right` are both set to `0`
1. While there is already vertical separation between the content within the `<details>` element, it's best to explicitly set them for uniformity. Beginning with the `.taskinfo` sections, add spacing with and around:
   1. Use the `padding` single-declaration shortcut to set the `top` and `bottom` to a value of `0`, while the `left` and `right` are both set to `1rem`
   1. Use the `margin` single-declaration shortcut to set the `top` and `bottom` to a value of `1rem`, while the `left` and `right` are both set to `0`

   Notice that the `margin` had no effect on the spacing between the sections, because they already had a space applied from their heading, whose margin will sit outside of the content portion of the section, allowing it to collapse with neighbouring vertically-margined blocks. This odd-looking effect is only noticeable when the sectioning blocks have a background colour. That said, leave the `margin` as applied, as it will come in handy in a letter exercise, when we change the way the boxes are holding their content.
1. Vertically space the content within the item by giving each a consistent `1rem` space above and below:
   1. Apply a class of `subpoints` to the unordered list of items within the `<details>` block
   1. Use the `margin` single-declaration shortcut to set the `top` and `bottom` to a value of `1rem`, while the `left` and `right` are both set to `0`, for the `.subpoints`, the `.task` summary elements, and the `<h2>` headings
      - Although the vertical space between content elements is modified to be consistent, notice the margins of the first and last elements within each section is still sitting on the outside - not ideal - but this will be resolved in a later exercise
      - Also note, no class was given to style the headings, which is quite common due to the nature of how headings are used. But it would be completely appropriate to set a class of `subheading` (or similar) to the headings if you prefer
1. To color-coordinate the `.todo` items to the categories they belong to, add a `border-top` to each of the `.todo` items with a `width` of `0.25rem`, a `style` of `solid` and a `color` of `rgba(255,255,255,0.15)`
   1. The translucent white border will be used for uncategorized items
   1. Notice that the `margin-top` applied to the `.task` summary element is now contained within the `<details>` elements, rather than sitting outside of the element, as it was before. 
      - This happens because the `border` is blocking the margin within from escaping. Although this works to keep the first and last element's margin within the parent container, adding a fake margin for that purpose is not necessary, nor advised
1. To keep a consistent vertical spacing cadence, change the `margin-top` and `margin-bottom` of the `h1` to be consistent with the spacing throughout the document, setting them both to `1rem`
1. To finish off the exercise, round the corners of the `.todo` and `.taskinfo` elements by setting a `border-radius` to a value of `0.5rem`
1. Lastly, simply add a simple `border-radius` of `0.5rem` to the existing `.status` rule to make it looks uniform with the rest of the soft corners
