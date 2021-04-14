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

}

grass.addEventListener(`click`, grassWasClicked)
save.addEventListener(`click`, saveScore)
close.addEventListener(`click`, startGame)
```


## Solution

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

   let tr = document.createElement(`tr`)
   
   let td1 = document.createElement(`td`)
   td1.textContent = leader.name
   let td2 = document.createElement(`td`)
   td2.textContent = leader.secs
   let td3 = document.createElement(`td`)
   td3.textContent = leader.miss
   let td4 = document.createElement(`td`)
   td4.textContent = leader.score.toFixed(1)

   tr.append(td1, td2, td3, td4)
   scores.append(tr)

   leaderboard.classList.remove(`hide`)
}

grass.addEventListener(`click`, grassWasClicked)
save.addEventListener(`click`, saveScore)
close.addEventListener(`click`, startGame)
```
