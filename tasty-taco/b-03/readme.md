# Exercise B-03: Images & paths

In this exercise, you will add `<img>` elements to the document, using various path types.

Complete the following steps in HTML or CSS (as indicated) to complete the exercise.

## Part 1: Paths

Let's practice writing relative paths to help grasp a concept that's easy to understand, but also easily written mistaken.

1. Begin by adding an `<img>` element as the first child of the `<nav class="navigation">`
   1. Wrap the `<img>` in anchor `<a></a>` tag with the `class` value of `logo`, setting the anchor's `href` to `#` so it just stays within the same page when clicked
   1. For the `<img>`, set the `alt` value to "Tasty Taco logo"
1. Recalling the path symbols - The folder name `.` refers to the folder that holds the current file, `..` refer to the parent folder of the current file's folder, and `/` is used to look within the folder specified (followed by another folder or file name), try preceding the logo image `tasty-logo.svg` with the following paths (note, most of these are impractical and used just for testing):
   1. `./img/tasty-logo.svg`
      - In the current folder, enter the `img` folder, then find the image file within
   1. `./css/../img/tasty-logo.svg`
      - In the current folder, enter the `css` folder, then head back to it's parent (the current folder again), enter the `img` folder, then find the image file within
   1. `/img/tasty-logo.svg`
      - From the server root folder, enter the `img` folder, then find the image file within
      - Note that starting the path with `/` will begin pointing it from the domain root (when testing locally with the "Live Server" extension is likely to be `127.0.0.1`), regardless of where the path is begin referenced from
1. Finally, set the final path to `img/tasty-logo.svg`, which will look in the current file's folder for the `img` folder, then find the file within there
   - This is the same as `./img/tasty-logo.svg` in this case, just slightly shorter

## Part 2: Images

1. Copy the anchor (`<a>`) wrapping the image (`<img>`) written in the previous section, pasting it as the first element of the document's `<footer class="content-footer">`, changing the image file name from `tasty-logo.svg` to `tasty-logo-black.svg`
1. Add the following images as `<img>` elements as the first child (above the `<h2>`) of each of their respective `<article class="menu-item">`, setting the `alt` value to the product name (the content of the section's heading)
   1. `img/starters-guac.jpg`
   1. `img/starters-nachos.jpg`
   1. `img/starters-salad.jpg`
   1. `img/tacos-chorizo.jpg`
   1. `img/tacos-chicken.jpg`
   1. `img/tacos-bajafish.jpg`
   1. `img/dessert-churros.jpg`
1. Add a general style rule that selects all `img` elements to make them fit within the layout by setting their `max-width` to `100%` and changing the `vertical-align` to `middle` to prevent a small gap from appearing under the image
