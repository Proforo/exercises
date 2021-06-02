let leaders = []
let leaderboard = document.querySelector(`#leaderboard`)
let scores = document.querySelector(`#scores`)


let calculateScore = (time, missed) => {
  return Number((10000 - (time * 50) - (missed * 200)).toFixed(1))
}

let addNewRecord = (userName, timeElapsed, missCount) => {
  let totalScore = calculateScore(timeElapsed, missCount)
  console.log(`${userName} scored ${totalScore}, missing ${missCount} in ${timeElapsed} seconds`)

  leaders.push({name: userName, secs: Number(timeElapsed.toFixed(1)), miss: missCount, score: totalScore})

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

let getJsonData = async (url) => {
  let response = await fetch(url)
  return await response.json()
}

let loadLeadersData = async () => {
  leaders = await getJsonData(`data/leaders.json`)
  buildTable(leaders)
}

export {calculateScore, addNewRecord, loadLeadersData}