import {loadLeadersData} from './leaderboard.js'
import {loadNewGameInterface} from './gamelogic.js'

let handleWindowLoaded = () => {
  loadLeadersData()
  loadNewGameInterface()
}

window.addEventListener(`load`, handleWindowLoaded)