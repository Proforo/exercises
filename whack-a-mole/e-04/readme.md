# E-04: Event Delegation

1. Modify the existing `grassWasClicked` function to accept an Event argument, by readying a parameter with the name `event`
1. Within the function body, store the `target` from the `event` parameter variable (it holds the element was who clicked to trigger this event) as a variable `whack`
1. Because this function will be called with any click of the grass, regardless of whether there is a `.hole` or not, write a condition statement that will check whether the `whack` value ("target") `.matches()` a `.mole:not(.whacked)`
   - This advanced selector will select `.mole` elements that are not (yet) `.whacked`
   - Within the condition statement, `add()` the `whacked` class to the `target` element's existign `classList`
1. Add an `else` statement to the condition that will handle the case where the `target` does not match an un-whacked mole.
   - If this occurs, increment the `missCount` variably by `+1` so indicate a "miss"
   - Update the "Missed" score within the `.info` by invoking the `whiteToMissed()` function, passing the `missCount` variable as the argument

After completing this exercise, the game should be fully playable!!



## Starting

```js
let timeElapsed
let missCount
let interval = 3
let frequency = 50
let moleTimer
let clockTimer

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
let summaryMissed = document.querySelector(`#summaryMissed`)
let summaryTime = document.querySelector(`#summaryTime`)
let summaryScore = document.querySelector(`#summaryScore`)


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

	let moles = document.querySelectorAll(`.mole`)
	moles.forEach(mole => {
		mole.classList.remove(`mole`)
	})

	let whacked = document.querySelectorAll(`.whacked`)
	whacked.forEach(whack => {
		whack.classList.remove(`whacked`)
	})

   moleTimer = setInterval(toggleMoles, frequency) // mole
	clockTimer = setInterval(tickTock, 100) // clock

   modal.classList.add(`hide`)
}

let tickTock = () => {
	timeElapsed += .1
	writeToClock(timeElapsed)
}

let toggleMoles = () => {
	let holes = document.querySelectorAll(`.hole:not(.whacked)`)
	let whichMole = Math.floor(Math.random() * (holes.length * interval))  

	if (whichMole < holes.length) {
		holes[whichMole].classList.toggle(`mole`)
	} else if (holes.length <= 0) {
		itsGameOver()
	}
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

	leaders.push({name: userName, secs: Number(timeElapsed.toFixed(1)), miss: missCount, score: totalScore})

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

let itsGameOver = () => {

   clearInterval(moleTimer)
	clearInterval(clockTimer)

	summaryMissed.textContent = missCount
	summaryTime.textContent = timeElapsed.toFixed(1)
	summaryScore.textContent = calculateScore(timeElapsed, missCount).toFixed(1)

	summaryMissed.setAttribute(`value`, missCount)
	summaryTime.setAttribute(`value`, timeElapsed.toFixed(1))
	summaryScore.setAttribute(`value`, calculateScore(timeElapsed, missCount).toFixed(1))

	leaderboard.classList.add(`hide`)
	gamesummary.classList.remove(`hide`)
	modal.classList.remove(`hide`)
}

grass.addEventListener(`click`, grassWasClicked)
save.addEventListener(`click`, saveScore)
close.addEventListener(`click`, startGame)

buildTable(leaders)
```



## Solution
```js
let grassWasClicked = (event) => {
	let whack = event.target
	if (whack.matches(`.mole:not(.whacked)`)) {
		whack.classList.add(`whacked`)
	} else {
		missCount++
		writeToMissed(missCount)
	}
}
```





