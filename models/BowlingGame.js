// eslint-disable-next-line space-before-blocks
class BowlingGame{
  constructor () {
    this.game = []
    this.rolls = []
    this.score = 0
    this.bonus = 0
  }

  // This will roll, the two chances that the player has per frame
  frames () {
    const pinsLeft = 11
    for (let i = 0; i < 2; i++) {
      this.rolls[i] = Math.floor(Math.random() * pinsLeft)
      i++
      if (this.rolls[i] !== 10) {
        this.rolls[i] = Math.floor(Math.random() * (pinsLeft - this.rolls[i - 1]))
      }
      this.game.push(this.rolls)
    }
  }

  getFrames () {
    return this.rolls
  }

  bonusCalculator () {

  }

  addToGame () {

  }
}
module.exports = BowlingGame
