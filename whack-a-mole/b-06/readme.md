# B-06: Backgrounds

## Part 1: Table styling
1. Write a rule to select the `.categories` `<thead>` element, setting its `background-color` to `#5c926a` and its font `color` to `#c8e6c0`
1. Notice there is a small space between each of the `<th>` headings. Remove that by writing a rule to select the entire `.leaderboard` `<table>`, assigning the `border-collapse` property a value of `collapse`
1. Write a rule to select the `.scores` `<tbody>` element, setting its `background-color` to `#eeeeee`
1. Next, add a `background-image` to the `.scores` element, assigning it the `url()` that points to the file `mole.png` using a relative project path, then set the `background-size` to a smaller value to see it tile, something close to `2rem`
   - Relative paths were first covered in the lesson on HTML `<img>` elements
1. The text is now difficult to read because the new `background-image` is obstructing it. Resolve this, by blending the `background-image` and `background-color` using the property `background-blend-mode`, assigning it a value of `soft-light` to fade the mole image into the background

## Part 2: "Grass" styling
1. To the `body` rule, add a `background-image` property, setting the value to *both* the `scribble.jpg` file (using a relative path, written within the `url()` function), and a `radial-gradient()` that simply goes from `#779956` (middle) to `#4a682e` (outer)
   - To set two values to the same property, separate the values with a comma
1. Notice that whichever values was written first, between the `url()` and the `radial-gradient()`, will show up above the other - preventing them both from being viewed. Merge together the image and the gradient using the `background-blend-mode` property, setting the value too `multiply`
1. Better! But the "scribble" doesn't look exactly enough like grass. Adjust the size of the scribble to feel more like a texture by reducing the `background-size`, setting it to a value of `8rem, 100%`
   - Note, the first value (`8rem`) is for the first `background-image`, which is assumed to be the `url()`, while the second (`100%`) is for the `radial-gradient`. If you wrote the values in the opposite order, also invert the `background-size` values

## Part 3: The mole

