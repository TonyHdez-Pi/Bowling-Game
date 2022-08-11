const BowlingGame = require('./models/BowlingGame')
const bowlingGame = new BowlingGame()

console.table(bowlingGame.getGame())
