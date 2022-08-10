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
    this.rolls = []
    this.rolls[0] = Math.floor(Math.random() * pinsLeft)
    if (this.rolls[0] === 10) {
      this.rolls[1] = 0
    }
    if (this.rolls[0] !== 10) {
      this.rolls[1] = Math.floor(Math.random() * (pinsLeft - this.rolls[0]))
    }
    this.game.push(this.rolls)
  }

  getRolls () {
    for (let i = 0; i < 10; i++) {
      this.frames()
    }
    return this.rolls
  }

  getGame () {
    return this.game
  }

  bonusCalculator () {

  }

  addToGame () {

  }
}
module.exports = BowlingGame
