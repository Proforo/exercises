let timeElapsed
let missCount

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
