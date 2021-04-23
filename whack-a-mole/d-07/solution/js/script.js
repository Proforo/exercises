let timeElapsed
let missCount

let modal = document.querySelector(`#modal`)
let duration = document.querySelector(`#duration`)
let missed = document.querySelector(`#missed`)

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
}

let tickTock = () => {
	timeElapsed += .1
	writeToClock(timeElapsed)
}

let calculateScore = (time, missed) => {
	return 10000 - (time * 50) - (missed * 200)
}
