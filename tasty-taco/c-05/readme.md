# Exercise C-05: Responsive Images

In this exercise, you will be making adjustments to the image elements that display the food items on the menu to optimize the file size for various viewport widths.

Complete the following steps in the HTML or CSS to complete the exercise:

## Part 1: Responsive images elements
1. To begin, review the the `/img` folder to see that there are new variations of each of the seven food photos previously added to the document as an `<img>`, with suffixes of both `-md` and `-sm`.
   - The smaller the image, the more square-like the image is, revealing more of the food
   - The larger the image, the wider the image is, ensuring the height of the image does not overtake the entire viewport as the browser or device width increases
1. Modify all seven (7) of the food `<img>` elements, adding the `srcset=""` attribute to each one, directly before the existing `src=""` attribute. 
   1. For the `srcset` value, comma separate the file path three times, each with a different suffix in order from smallest to largest (`-sm`, `-md`, `-lg`)
   1. Once each file name is listed, add the intrinsic width of the image in pixel, but represented with a `w` after the number, then space separated before the comma. For example, an image with the file name `image-file-path-sm.jpg` with an intrinsic width of `123px`, would be written like this: `image-file-path-sm.jpg 123w`. Do so for the following widths:
      1. File names ending in `-sm`: `560w`
      1. File names ending in `-md`: `880w`
      1. File names ending in `-lg`: `1216w`

Note: Your browser will attempt to use the largest version of the image available, making testing somewhat difficult. Try reducing the size of the browser to the minimum width, refreshing and then stretching it slowly.

## Part 2: Responsive background image
1. Once again, notice there are three (3) file versions of the `header.jpg`, with suffixes `-sm`, `-md` and `-lg`
1. The `-sm` version of the image has been set as the background of the `.hero` element
   1. In the `min-width: 40rem` media query, assign the `header-md.jpg` as the `background-image` for the `.hero` element, which will replace the `-sm` version for viewport widths of `40rem` or greater
   1. In the `min-width: 60rem` media query, assign the `header-lg.jpg` as the `background-image` for the `.hero` element, which will replace the `-md` version for viewport widths of `60rem` or greater






## Ignore these notes, please
<!-- 
Background image:
640x570px
960x698
∞x698
 -->

<!-- Widths needed:
mobile: 560px
tablet: 880px
desktop: 1216px
-->

<!-- Widths after
mobile: 560px
tablet: 352px
desktop: 304px
-->
