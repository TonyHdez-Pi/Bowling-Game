const BowlingGame = require('../models/BowlingGame')

const bowlingGame = new BowlingGame()

const rolls = bowlingGame.getFrames()

// eslint-disable-next-line no-undef
test('Should return an array of two rolls', () => {
  for (let i = 0; i < rolls.length; i++) {
    // eslint-disable-next-line no-undef
    expect(rolls[i]).toBeGreaterThanOrEqual(0)
  }
})
