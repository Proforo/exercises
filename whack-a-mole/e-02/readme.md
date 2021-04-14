# E-02: Arrays

1. At the top of the document, directly under the existing variables, define an Array that holds Objects, each containing the data for a single row of the leaderboard table (parameters: `name`, `secs`, `miss`, and `score`). Store a reference to the Array data as a variable named `leaders`
   1. Add some sample names for testing (the values are made up), structuring each as an Object within the Array:
      -  Tim Berners-Lee, 29, 0, 10000.0
      -  Ada Lovelace, 31, 0, 9600.0
      -  Alan Turing, 32, 1, 9200.0
      -  Grace Hopper, 38, 0, 8800.0
2. Modify the `buildTable` function to receive a single argument (`data`), which will be a reference to the `leaders` array
   1. First, remove the temporary `leader` Object created previously for testing
   1. Then, empty all of the existing rows from the `scores` table-body by assigning the `innerHTML` property of the `scores` element to a blank string value `""`
   1. Next, paste the following line of code to `sort()` the Array, in order of score from highest to lowest: `data.sort((a, b) => b.score - a.score)`
   1. Add the rows from the Array to the table one-by-one, by wrapping the remaining `buildTable` code (used to create the table data in a previous exercise) in a function that takes a single Object row as a argument and stores it to the parameter `leader`. That function is then passed as the "callback" function to the `forEach()` method, which is running once **forEach** of the Objects in the `data` Array
   1. Complete the exercise by calling the `buildTable` function in two places, each time passing the `leaders` Array as the argument:
      1. Invoke `buildTable()` at the bottom of the script
      1. Invoke `buildTable()` from the bottom of the `saveScore()` function



## Starting

```js
let timeElapsed
let missCount

let modal = document.querySelector(`#modal`)
let leaderboard = document.querySelector(`#leaderboard`)
let gamesummary = document.querySelector(`#gamesummary`)
let duration = document.querySelector(`#duration`)
let missed = document.querySelector(`#missed`)
let yourname = document.querySelector(`#yourname`)
let grass = document.querySelector(`#grass`)
let save = document.querySelector(`#save`)
let close = document.querySelector(`#close`)
let scores = document.querySelector(`#scores`)

let writeToClock = (sec) => {
	duration.textContent = (sec).toFixed(1)
	duration.setAttribute(`value`, (sec).toFixed(1))
}

let writeToMissed = (miss) => {
	missed.textContent = miss
	missed.setAttribute(`value`, miss)
}

let startGame = () => {
	timeElapsed = 0
	writeToClock(timeElapsed)

	missCount = 0
	writeToMissed(missCount)

   modal.classList.add(`hide`)

   console.log(`Go!`)
}

let tickTock = () => {
	timeElapsed += .1
	writeToClock(timeElapsed)
}

let toggleMoles = () => {
   let whichMole = Math.floor(Math.random() * 7)

   console.log(`Mole #${whichMole}`)
}

let grassWasClicked = () => {
   console.log(`Click!`)
}

let calculateScore = (time, missed) => {
	return Number((10000 - (time * 50) - (missed * 200)).toFixed(1))
}

let saveScore = () => {
	gamesummary.classList.add(`hide`)
	leaderboard.classList.remove(`hide`)

	let totalScore = calculateScore(timeElapsed, missCount)
	let userName = yourname.value.trim()

   console.log(`${userName} scored ${totalScore}, missing ${missCount} in ${timeElapsed} seconds`)
}

let buildTable = () => {
   let leader = {
      name: `Ada Lovelace`, 
      secs: 12, 
      miss: 1, 
      score: 9200
   }

   let tr = scores.insertRow()
   tr.insertCell().textContent = leader.name
   tr.insertCell().textContent = leader.secs
   tr.insertCell().textContent = leader.miss
   tr.insertCell().textContent = leader.score.toFixed(1)

   leaderboard.classList.remove(`hide`)
}

grass.addEventListener(`click`, grassWasClicked)
save.addEventListener(`click`, saveScore)
close.addEventListener(`click`, startGame)
```


## Complete

```js
let timeElapsed
let missCount

let modal = document.querySelector(`#modal`)
let leaderboard = document.querySelector(`#leaderboard`)
let gamesummary = document.querySelector(`#gamesummary`)
let duration = document.querySelector(`#duration`)
let missed = document.querySelector(`#missed`)
let yourname = document.querySelector(`#yourname`)
let grass = document.querySelector(`#grass`)
let save = document.querySelector(`#save`)
let close = document.querySelector(`#close`)
let scores = document.querySelector(`#scores`)

let leaders = [
	{name: `Katherine Johnson`, secs: 34, miss: 2, score: 7200},
	{name: `Tim Berners-Lee`, secs: 29, miss: 0, score: 10000},
	{name: `Ada Lovelace`, secs: 31, miss: 0, score: 9600},
	{name: `Alan Turing`, secs: 32, miss: 1, score: 9200},
]

let writeToClock = (sec) => {
	duration.textContent = (sec).toFixed(1)
	duration.setAttribute(`value`, (sec).toFixed(1))
}

let writeToMissed = (miss) => {
	missed.textContent = miss
	missed.setAttribute(`value`, miss)
}

let startGame = () => {
	timeElapsed = 0
	writeToClock(timeElapsed)

	missCount = 0
	writeToMissed(missCount)

   modal.classList.add(`hide`)

   console.log(`Go!`)
}

let tickTock = () => {
	timeElapsed += .1
	writeToClock(timeElapsed)
}

let toggleMoles = () => {
   let whichMole = Math.floor(Math.random() * 7)

   console.log(`Mole #${whichMole}`)
}

let grassWasClicked = () => {
   console.log(`Click!`)
}

let calculateScore = (time, missed) => {
	return Number((10000 - (time * 50) - (missed * 200)).toFixed(1))
}

let saveScore = () => {
	gamesummary.classList.add(`hide`)
	leaderboard.classList.remove(`hide`)

	let totalScore = calculateScore(timeElapsed, missCount)
	let userName = yourname.value.trim()

   console.log(`${userName} scored ${totalScore}, missing ${missCount} in ${timeElapsed} seconds`)

   buildTable(leaders)
}

let buildTable = (data) => {
	
	scores.innerHTML = ``
	data.sort((a, b) => b.score - a.score)

	data.forEach((leader) => {
		let tr = scores.insertRow()
		tr.insertCell().textContent = leader.name
		tr.insertCell().textContent = leader.secs
		tr.insertCell().textContent = leader.miss
		tr.insertCell().textContent = leader.score.toFixed(1)
	})

   leaderboard.classList.remove(`hide`)
}

grass.addEventListener(`click`, grassWasClicked)
save.addEventListener(`click`, saveScore)
close.addEventListener(`click`, startGame)

buildTable(leaders)
```
