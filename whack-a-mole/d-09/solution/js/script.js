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

let addNewRecord = (userName, timeElapsed, missCount) => {
	let totalScore = calculateScore(timeElapsed, missCount)
	console.log(`${userName} scored ${totalScore}, missing ${missCount} in ${timeElapsed} seconds`)
}

let saveScore = () => {
	gamesummary.classList.add(`hide`)
	leaderboard.classList.remove(`hide`)

	let userName = yourname.value.trim()
	addNewRecord(userName, timeElapsed, missCount)
}


grass.addEventListener(`click`, grassWasClicked)
save.addEventListener(`click`, saveScore)
close.addEventListener(`click`, startGame)
