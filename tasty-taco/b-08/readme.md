# Exercise B-08: Custom properties

In this exercise, you will be developing a design system using variables, means to simplify the design process and maintain maximum scalability

Complete the following steps in CSS to complete the exercise.

1. Define a rule as the very top of the `.css` document that will select the `<html>` element
1. Within it, define two variables: `--font-a` and `--font-b`, assigning each the respective font sets defined earlier: `Helvetica, Arial, sans-serif` and `Georgia, 'Times New Roman', Times, serif`
   1. Replace all instances of the two font sets in the CSS with the new `var(--font-a)` and `var(--font-b)` values
1. Define four color pairs, where each pair is made up of a colour intended as a `background-color`, and an "on" color, used to set the foreground `color` of text and other accents. For example, if a colour was named `--col-a`, then ensure the pairing colour is named `--col-a-on` (or similar). For the colours, use the following pairs, which are already set throughout the CSS document in various places:
   - `rgb(255, 255, 255)` & `rgb(20, 20, 20)`
	- `rgb(203, 68, 33)` & `rgb(255, 255, 255)`
	- `rgba(255, 173, 50, 0.9)` & `rgb(20, 20, 20)`
	- `rgb(238, 238, 238)` & `rgb(96, 96, 96)`
1. Apply the colours throughout the document, replacing all colours previously defined. As there are some repeating colours, think through all decisions carefully and logically. 
   - For example, which variable should the `color` value of the `.primary-slogan` and `.secondary-slogan` be set from? Consider it should be an `-on` colour, as it is forground content. As well, consider using `-on` from a pair with a dark foreground, as the image behind this text may change down the road
1. Finally, create an accent colour that can provide some tone anywhere, without having to be specifically defined as an accent for any one colour. To do this, use a light dark or light transparency. In this case, define `--col-accent` (or similarly named) and assign it the value `rgba(0, 0, 0, 0.25)`. Replace all existing instances of this colour with the new variable
