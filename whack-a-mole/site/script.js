let timeElapsed
let missCount
let moleTimer
let clockTimer
let frequency = 50 // Lower makes the moles appear faster
let interval = 3 // Higher spaces out the moles

let duration = document.querySelector(`#duration`)
let missed = document.querySelector(`#missed`)
let grass = document.querySelector(`#grass`)
let save = document.querySelector(`#save`)
let gamesummary = document.querySelector(`#gamesummary`)
let modal = document.querySelector(`#modal`)
let close = document.querySelector(`#close`)
let leaderboard = document.querySelector(`#leaderboard`)
let yourname = document.querySelector(`#yourname`)
let scores = document.querySelector(`#scores`)
let summaryMissed = document.querySelector(`#summaryMissed`)
let summaryTime = document.querySelector(`#summaryTime`)
let summaryScore = document.querySelector(`#summaryScore`)

let leaders = []
// [
// 	{name: `Katherine Johnson`, secs: 34, miss: 2, score: 7200},
// 	{name: `Tim Berners-Lee`, secs: 29, miss: 0, score: 10000},
// 	{name: `Ada Lovelace`, secs: 31, miss: 0, score: 9600},
// 	{name: `Alan Turing`, secs: 32, miss: 1, score: 9200},
// 	{name: `Grace Hopper`, secs: 38, miss: 0, score: 8800},
// 	{name: `Satoshi Nakamoto`, secs: 40, miss: 0, score: 7150},
// 	{name: `Roy L. Clay, Sr.`, secs: 35, miss: 3, score: 6800},
// 	{name: `Linus Torvalds`, secs: 41, miss: 1, score: 6700}
// ]
// console.log(leaders.sort((a, b) => {a.score < b.score}))
// Maybe leaderboard isn't needed - it doesn't save anyways



// Popup mole
let toggleMoles = () => {
	let holes = document.querySelectorAll(`.hole:not(.whacked)`)
	let whichMole = Math.floor(Math.random() * (holes.length * interval))  // Make this number bigger than length? For some pause

	// console.log(which, holes.length)
	// If the number of holes without whacked moles is greater than 0
	if (whichMole < holes.length) {
		holes[whichMole].classList.toggle(`mole`)
	} else if (holes.length <= 0) {
		itsGameOver()
	}
}

// Clock
let tickTock = () => {
	timeElapsed += .1
	writeToClock(timeElapsed)
}

// Whack!
let grassWasClicked = (event) => {
	let whack = event.target
	if (whack.matches(`.mole:not(.whacked)`)) {
		// Got one!
		whack.classList.add(`whacked`)
	} else {
		// secs
		missCount++
		writeToMissed(missCount)
	}
}


let startGame = () => {
	
	timeElapsed = 0
	writeToClock(timeElapsed)

	missCount = 0
	writeToMissed(missCount)
	
	// Remove all the moles? Does this need to get split up?
	let moles = document.querySelectorAll(`.mole`)
	moles.forEach(mole => {
		mole.classList.remove(`mole`)
	})

	// Remove all the moles? Does this need to get split up?
	let whacked = document.querySelectorAll(`.whacked`)
	whacked.forEach(whack => {
		whack.classList.remove(`whacked`)
	})

	grass.addEventListener(`click`, grassWasClicked) // whack
	moleTimer = setInterval(toggleMoles, frequency) // mole
	clockTimer = setInterval(tickTock, 100) // clock
	
	// leaderboard.classList.add(`hide`)
	modal.classList.add(`hide`)
}


let saveScore = () => {

	gamesummary.classList.add(`hide`)
	leaderboard.classList.remove(`hide`)

	let totalScore = calculateScore(timeElapsed, missCount)
	let userName = yourname.value.trim()

	leaders.push({name: userName, secs: Number(timeElapsed.toFixed(1)), miss: missCount, score: totalScore})

	buildTable(leaders)
}


let calculateScore = (time, missed) => {
	return 10000 - (time * 50) - (missed * 200)
}

let itsGameOver = () => {

	clearInterval(moleTimer)
	clearInterval(clockTimer)

	// Stop the clicking (maybe just throw up the modal?)
	grass.removeEventListener(`click`, grassWasClicked)

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
save.addEventListener(`click`, saveScore)



let buildTable = (data) => {
	
	scores.innerHTML = `` // better clear
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
close.addEventListener(`click`, startGame)



let writeToClock = (sec) => {
	duration.textContent = (sec).toFixed(1)
	duration.setAttribute(`value`, (sec).toFixed(1))
}
let writeToMissed = (miss) => {
	missed.textContent = miss
	missed.setAttribute(`value`, miss)
}


let getJsonData = async (url) => {
	let response = await fetch(url)
	return await response.json()
}

let loadLeadersData = async () => {
   leaders = await getJsonData(`data/leaders.json`)
   buildTable(leaders)
}

window.addEventListener(`load`, ()=> {loadLeadersData()})

// Some kind of window control function? A reducer? State manager?
// Slow the game down



