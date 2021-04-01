// Timer
// Score
let seconds = 0
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
		// seconds
		seconds++
		whacks.textContent = seconds
	}
}


let restartGame = () => {
	
	seconds = 0
	whacks.textContent = seconds
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



let followCursor = () => {
	// leaderboard.classList.add(`hide`)
	
}
window.addEventListener(`mousemove`, followCursor)





// Part 1: The moles
// Part 2: Timer/score and cleanup
// Array can be used to keep track of each mole
// Array of leaders

const leaders = [
	{name: `Tim Berners-Lee`, seconds: 29, missed: 0, score: 10000},
	{name: `Ada Lovelace`, seconds: 31, missed: 0, score: 9600},
	{name: `Alan Turing`, seconds: 32, missed: 1, score: 9200},
	{name: `Grace Hopper`, seconds: 38, missed: 0, score: 8800},
	{name: `Katherine Johnson`, seconds: 34, missed: 2, score: 7200},
	{name: `Satoshi Nakamoto`, seconds: 40, missed: 0, score: 7150},
	{name: `Roy L. Clay, Sr.`, seconds: 35, missed: 3, score: 6800},
	{name: `Linus Torvalds`, seconds: 41, missed: 1, score: 6700}
]
console.log(leaders.sort((a, b) => {a.score < b.score}))
// Maybe leaderboard isn't needed - it doesn't save anyways
