# D-08: Event Listeners


1. Use the `querySelector()` method to search the `document` for the element with the selector `#grass`, then store a reference to that element as a variable names `grass`
   - Listen to the `grass` element for a `click` by invoking the `addEventListener()` method at the bottom of the script. When clicked, ensure the `grassWasClicked` method is invoked
1. Use the `querySelector()` method to search the `document` for the element with the selector `#save`, then store a reference to that element as a variable names `save`
   - Listen to the `save` element for a `click` by invoking the `addEventListener()` method at the bottom of the script. When clicked, ensure the `saveScore` method is invoked
1. Use the `querySelector()` method to search the `document` for the element with the selector `#close`, then store a reference to that element as a variable names `close`
   - Listen to the `close` element for a `click` by invoking the `addEventListener()` method at the bottom of the script. When clicked, ensure the `startGame` method is invoked


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

let writeToClock = (sec) => {
	duration.textContent = sec
	duration.setAttribute(`value`, sec)
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

let grassWasClicked = () => {
   console.log(`Click!`)
}

let calculateScore = (time, missed) => {
	return 10000 - (time * 50) - (missed * 200)
}

let saveScore = () => {
	gamesummary.classList.add(`hide`)
	leaderboard.classList.remove(`hide`)

	let totalScore = calculateScore(timeElapsed, missCount)
	let userName = yourname.value

   console.log(`${userName} scored ${totalScore}, missing ${missCount} in ${timeElapsed} seconds`)
}
```

## Complete

```js
// The above "starting" code, with these added at the top
let grass = document.querySelector(`#grass`)
let save = document.querySelector(`#save`)
let close = document.querySelector(`#close`)

// starting code here

// And these at the bottom
grass.addEventListener(`click`, grassWasClicked)
save.addEventListener(`click`, saveScore)
close.addEventListener(`click`, startGame)
```



