# C-06: Pseudo selectors

## Part 1: Custom cursors
In this section, you will be changing the mouse cursor to a cartoon hand image, changing the graphic as the mouse is engaged in various pseudo states while in the interface. 

All of these `cursor` property will take these two comma-separated values:
   - the `url()` image together with an offset number of pixels (`32 32`) to center the images directly over the mouse position
   - a backup cursor type of `crosshair`

The declaration together will look like this:
```css
cursor: url(/* filename */) 32 32, crosshair;
```

1. Start by setting the default `slappy-up.png` image path as the cursor for the entire page by adding it to the existing `body` rule
2. When the mouse is over the `.hole` in the `:hover` pseudo state, set the cursor image to the path for the file `slappy-over.png` so that it's clear when the hand is over the hole and ready to whack it
3. Change the image to a "whack" when the mouse is clicked by writing a rule to target the `.hole` in an `:active` pseudo state, by setting the `url()` to the path for the image `slappy-down.png`

Consider other possible variation of the above states that are possible to select for given the current setup:
- Hovering over a `.hole` that has a `.mole`
- Hovering over a `.hole.mole` that is also `.whacked`
- Active (clicking) on a `.hole.mole` that is `.whacked`

While images are not provided for these states, it would be great practice to write all of those selector to ensure you are comfortable with combining selectors.

## Part 2: Table styling
1. For the `.score tr` (the rows of the `<tbody>` element) in the `.leaderboard` `<table>`, apply a `background-color` value of `rgba(0,0,0,0.1)` to only the rows that are `even` numbered, using the `:nth-child()` pseudo selector, to create a striped row effect
   - The `:nth-child()` pseudo selector can take a specific numbered element, a formula to match certain numbered elements in a pattern, or simply an `even` or `odd` value between its function parenthesis
2. Set the `text-align` for the `:first-child` and `:last-child` of every `<tr>` (row) in the entire `.leaderboard` table, to `left` and `right`, respectively
   - Be careful here! Remember that the `<tr>` (rows) within the `<thead>` is full of `<th>` (table heading) elements, while the rows in the `<tbody>` are all `<td>` (table data) elements. Combinging the pseudo selectors `:first-child` and `:last-child` with the element type would require writing twice as many selectors. Pseudo selectors can select elements on their own, but should be scoped as a descendent, so that it doesn't select _all_ `:first-child` and `:last-child` elements in the entire document
3. Finish off the two previously written rules by setting `padding-left` to `1rem` for the `:first-child` rule, and `padding-right` to `1rem` for the `:last-child` rule to buffer the text away from the edges