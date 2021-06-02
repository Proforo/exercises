# E-07: Asynchronous data fetching

<!-- NOTE FOR ANDY AND CO: "Part 1" might be better just done for them in the starting code (or moved to a previous exercise?). After writing this, I thought that was likely better to keep this exerise focused - but will leave it in at your discretion (ie, to be discussed) -->

## Part 1: Cleanup existing code
1. Remove the call to `loadLeadersData()` from the last line of `gamelogic.js`
1. At the bottom of `gamelogic.js`, write a new function named `loadNewGameInterface` and add to it, the following:
   1. Move the existing document references to `#grass`, `#save` and `#close` into the new function `loadNewGameInterface`
   2. Move the three (3) `addEventListener()` calls which are added to the previous elements (`grass`, `save`, and `close`) into the new function `loadNewGameInterface`

## Part 2: Splitting files
1. In the file `index.html`, update the `<script>` element that's attaching `js/script.js` to the application, to include the attribute `type="module`
1. Create a new file named `leaderboard.js` in the project's `js` folder. From the existing `script.js` file, move the following code to the new `leaderboard.js` (ie, cut and paste)
   1. The empty `leaders` Array
   2. The document references to `#leaderboard` and `#scores`
   3. The function `calculateScore`
   4. The function `addNewRecord`
   5. The function `buildTable`
   6. The function `getJsonData`
   7. The function `leaderboard`
1. Create a new file named `gamelogic.js` in the project's `js` folder. From the existing `script.js` file, move ALL of the remaining code to the new `gamelogic.js` (ie, cut and paste; `script.js` will now be empty)


## Part 3: Exporting & importing functions
1. As the last line of code for `leaderboard.js`, write an export statement to `export {}` the functions `calculateScore`, `addNewRecord`, and `loadLeadersData`
1. As the last line of code for `gamelogic.js`, write an export statement to `export {}` the function `loadNewGameInterface`
1. As the first line of `gamelogic.js`, write an import statement to `import {}` the functions `calculateScore` and `addNewRecord` from `'./leaderboard.js`
1. As the first line of `script.js`, write an import statement to `import {}` the function `loadLeadersData` from `'./leaderboard.js`
2. As the second line of `script.js`, write an import statement to `import {}` the function `loadNewGameInterface` from `'./gamelogic.js`

## Part 4: Start the game
1. In the file `script.js`, write a function named `handleWindowLoaded`. Within the new function, call the two function that are imported at the top of the document:
   - `loadLeadersData()`
   - `loadNewGameInterface()`
2. As the last line of `script.js`, write an `addEventListener` that will call the `handleWindowLoaded` function when the `window` has heard the `load` event