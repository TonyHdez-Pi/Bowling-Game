const BowlingGame = require('./models/BowlingGame')
const bowlingGame = new BowlingGame()

bowlingGame.getFrames()
console.table(bowlingGame.getGame())
console.log(bowlingGame.getScore())
