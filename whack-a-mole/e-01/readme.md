# E-01: Creating Elements

Complete the `buildTable` function, beginning immediately after the definition of the `leader` object.
   1. Create a `tr` element using the `document.createElement()` method
   1. Create four (4) `td` elements using the `document.createElement()` method
   1. Set the `textContent` of each of the new `td` elements to the properties from the `leader` object: `name`, `secs`, `miss`, and `score` (round the `score` to a single decimal place)
   1. Use the `append()` method to add the four `td` elements to the `tr` element
      - Note, all four elements can be added at the same time by comma separating them as arguments of the `append()` method
   1. Use the `append()` method to add the `tr` to the `score` element (the `<tbody>`)
   1. Once the table is built, `.remove()` the `hide` class from the `classList` of the `leaderboard`

Table elements and their children have a number of special built-in methods to simplify the process of creating and appending data to the table. The following code would be capable of replacing the steps completed previously. (Bear in mind, these methods only work for tables)

```js
// insertRow() will both create a `tr` and append it at the same time
let tr = scores.insertRow()

// insertCell() will both create a `td` and append it at the same time
tr.insertCell().textContent = leader.name
tr.insertCell().textContent = leader.secs
tr.insertCell().textContent = leader.miss
tr.insertCell().textContent = leader.score.toFixed(1)
```
