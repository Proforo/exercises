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

let addNewRecord = (userName, timeElapsed, missCount) => {
	let totalScore = calculateScore(timeElapsed, missCount)
	console.log(`${userName} scored ${totalScore}, missing ${missCount} in ${timeElapsed} seconds`)
}

let saveScore = () => {
	gamesummary.classList.add(`hide`)
	leaderboard.classList.remove(`hide`)

	let userName = yourname.value
	addNewRecord(userName, timeElapsed, missCount)
}


grass.addEventListener(`click`, grassWasClicked)
save.addEventListener(`click`, saveScore)
close.addEventListener(`click`, startGame)
