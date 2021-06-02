import {calculateScore, addNewRecord} from './leaderboard.js'

let timeElapsed
let missCount
let interval = 3
let frequency = 50
let moleTimer
let clockTimer

let modal = document.querySelector(`#modal`)
let summaryMissed = document.querySelector(`#summaryMissed`)
let summaryTime = document.querySelector(`#summaryTime`)
let summaryScore = document.querySelector(`#summaryScore`)
let duration = document.querySelector(`#duration`)
let missed = document.querySelector(`#missed`)
let gamesummary = document.querySelector(`#gamesummary`)
let yourname = document.querySelector(`#yourname`)

let writeToClock = (sec) => {
  duration.textContent = (sec).toFixed(1)
  duration.setAttribute(`value`, (sec).toFixed(1))
}

let writeToMissed = (miss) => {
  missed.textContent = miss
  missed.setAttribute(`value`, miss)
}

let tickTock = () => {
  timeElapsed += .1
  writeToClock(timeElapsed)
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

let toggleMoles = () => {
  let holes = document.querySelectorAll(`.hole:not(.whacked)`)
  let whichMole = Math.floor(Math.random() * (holes.length * interval))	

  if (whichMole < holes.length) {
    holes[whichMole].classList.toggle(`mole`)
  } else if (holes.length <= 0) {
    itsGameOver()
  }
}

let grassWasClicked = (event) => {
  let whack = event.target
  if (whack.matches(`.mole:not(.whacked)`)) {
    whack.classList.add(`whacked`)
  } else {
    missCount++
    writeToMissed(missCount)
  }
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

let saveScore = () => {
  gamesummary.classList.add(`hide`)
  leaderboard.classList.remove(`hide`)

  let userName = yourname.value.trim()
  addNewRecord(userName, timeElapsed, missCount)
}

let loadNewGameInterface = () => {
  let grass = document.querySelector(`#grass`)
  let save = document.querySelector(`#save`)
  let close = document.querySelector(`#close`)

  grass.addEventListener(`click`, grassWasClicked)
  save.addEventListener(`click`, saveScore)
  close.addEventListener(`click`, startGame)
}

export {loadNewGameInterface}