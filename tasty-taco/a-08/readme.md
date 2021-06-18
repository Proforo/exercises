# Exercise A-08: Font and inheritance

In this exercise, you will be setting some of the primary font styling, including the `font-family`, `font-size`, `font-weight` and `font-style`.

Complete the following steps in CSS to complete the exercise.

## Part 1: Font family

This page will use two font stacks throughout the entire document:
- Sans-serif set: `Helvetica, Arial, sans-serif`
- Serif set: `Georgia, 'Times New Roman', Times, serif`

1. Apply the "Sans-serif" set to `font-family` of the `body` rule, so that it's applied to all inheriting elements by default
2. Create new CSS rules for the anchor, primary slogan, the business name, and the category name. Add the classes below into the HTML. Apply the "Serif" set to the `font-family` of these elements:
   - `a`
   - `.primary-slogan`
   - `.business-name`
   - `.category-name`

## Part 2: Font size

1. Always begin by setting the base `font-size` of the document, in the rule that selects the `<body>`, as all descending elements will inherit from that. Assign a value of `1rem`, which is a multiple of the browser's set font-size
   - Remember that the base unit of a single `rem` can be modified by assigning a new value to a rule selecting the `html` element. In this case, there's no specific need to do so as of yet.
1. Notice in the HTML that the three levels of heading in this document (`<h1>`, `<h2>` and `<h3>`) all have classes assigned to them (`.business-name`, `.category-name` and `.item-name` respectively). To the rules that apply to those elements, assign the following `font-size` values:
   1. `.business-name` rule: `2.5rem`
   1. `.category-name` rule: `2.5rem`
   1. `.item-name` rule: `1rem`
1. Increase the size of the text for all `<a>` elements by setting the `font-size` for the rule that selects all anchors, to a value of `1.125rem`
1. Assign the sizes `3rem` and `1.5rem` to the elements with the class `.primary-slogan` and `.secondary-slogan` respectively
   1. Be sure to create a new rule to select the elements with a class value of `.secondary-slogan`, as this is the first declaration being applied to elements with that class value
   
## Part 3: Font style and weight

1. Overwrite the default `font-style` for the `.callout` and `.item-price` rules defined earlier, setting them to a value of `italic`
1. Apply the `font-weight` value of `700` (which is the same as simply writing `bold`) to the rules that select the following elements:
   - `a`
   - `.primary-slogan`
   - `.secondary-slogan`
   - `.callout`
1. The anchors element within the `.nav-sublist` are actually supposed to be only a `font-weight` of `400` (also known as `normal`), however you have already applied a rule to all `<a>` elements setting the value to `700`. To overwrite the general default applied to all `a` elements, write a new rule with a more specific selector: `.nav-sublist a` (meaning, _"anchors within the .nav-sublist"_), then assign its `font-weight` the appropriate value of `400` and watch as your specificity is picked up and applied thanks to the rules of cascading
   - There will be further instruction on cascading and writing more advanced selectors, but this is a great opportunity to preview the lessons ahead and understand that in situations such as this, it often requires styling an entire set and then un-styling a small subset, to write CSS efficiently
   - If you are comfortable with applying that advanced selector, consider updating the rule that selects _all_ anchors, to `.nav-list a` so that anchors that might be created later in other parts of the document are not affected by the style definitions intended for the navigation anchors
