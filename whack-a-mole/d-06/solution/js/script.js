let timeElapsed
let missCount

let leader = {
   name: `Ada Lovelace`, 
   secs: 12, 
   miss: 1, 
   score: 9200
}
console.log(`${leader.name} scored ${leader.score}, missing ${leader.miss} in ${leader.secs} seconds`)

let startGame = () => {
   timeElapsed = 0
   missCount = 0
}

let tickTock = () => {
   timeElapsed += .1
}

let calculateScore = (time, missed) => {
   return 10000 - (time * 50) - (missed * 200)
}
