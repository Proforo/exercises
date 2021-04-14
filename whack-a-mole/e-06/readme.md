# E-06: Asynchronous data fetching

1. Modify the `leaders` Array by deleting all default starting data, simply replacing it with an empty Array: `[]`
1. Define a new function named `getJsonData`, setting it to be  `async` (asynchronous) and receiving one argument, a string URL to a JSON data file, that is stored as the parameter `url`
   1. The function will `await` a the resolution of a Promise from a `fetch()` to the `url`, then will store the `result` as a variable
   1. Then simply `return` the results of the `response.json()`, which the function will also have to `await`
1. Next, define a new function named `loadLeadersData`, setting it to be `async` (asynchronous) as well
   1. The function will call the `getJsonData` function, passing it the url to the JSON file, and then `await` the resulting leader data, then assign it to the `leaders` variable that's currently an empty Array
1. Modify the last line of code for the application, such that the application does not invoke `buildTable(leaders)` to begin the game, but instead invokes a new function named `loadLeadersData()`
1. Complete the application by moving the `buildTable(leaders)` code removed in the previous step, into the final line of the `loadLeadersData` function, so that once the `leaders` are returned asynchronously, the board will be loadedxw



```js
let leaders = []

let getJsonData = async (url) => {
	let response = await fetch(url)
	return await response.json()
}

let loadLeadersData = async () => {
   leaders = await getJsonData(`data/leaders.json`)
   buildTable(leaders)
}

loadLeadersData()
```
