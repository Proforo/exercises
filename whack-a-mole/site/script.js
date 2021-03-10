// Timer
// Score
let missed = 0
let duration = 0
let moleTimer;
let clockTimer;


let seconds = document.querySelector(`#seconds`)
let whacks = document.querySelector(`#whacks`)
let grass = document.querySelector(`#grass`)
let start = document.querySelector(`#start`)
let quit = document.querySelector(`#quit`)
let modal = document.querySelector(`#modal`)
let close = document.querySelector(`#close`)
let leaderboard = document.querySelector(`#leaderboard`)


// Popup mole
let doMoleAction = () => {
	let holes = document.querySelectorAll(`.hole:not(.whacked)`)
	let which = Math.floor(Math.random() * holes.length)  // Make this number bigger than length? For some pause

	if (holes.length > 0) {
		holes[which].classList.toggle(`mole`)
	} else {
		clearInterval(moleTimer)
		clearInterval(clockTimer)
		
		
		grass.removeEventListener(`click`, onClickGrass)
		modal.classList.add(`hide`)
		// Or, restart?
		// Give the option
		// Increase speed with "levels"?
		// Can you think of other ways to improve this game?
	}
}

// Clock
let tickTock = () => {
	duration++
	seconds.textContent = duration
}

// Whack!
let onClickGrass = (event) => {
	let whach = event.target
	if (whach.matches(`.mole:not(.whacked)`)) {
		// Got one!
		whach.classList.add(`whacked`)
	} else {
		// Missed
		missed++
		whacks.textContent = missed
	}
}


let restartGame = () => {
	
	missed = 0
	whacks.textContent = missed
	duration = 0
	seconds.textContent = duration
	
	// Remove all the moles? Does this need to get split up?
	let moles = document.querySelectorAll(`.mole`)
	moles.forEach(mole => {
		mole.classList.remove(`mole`)
	})

	grass.addEventListener(`click`, onClickGrass) // whack
	moleTimer = setInterval(doMoleAction, 200) // mole
	clockTimer = setInterval(tickTock, 1000) // clock
	
	modal.classList.add(`hide`)
}
start.addEventListener(`click`, restartGame)


let closeLeaderboard = () => {
	leaderboard.classList.add(`hide`)
}
close.addEventListener(`click`, closeLeaderboard)


// Part 1: The moles
// Part 2: Timer/score and cleanup
// Array can be used to keep track of each mole