// eslint-disable-next-line space-before-blocks
class BowlingGame{
  constructor () {
    this.game = []
    this.rolls = []
    this.score = 0
  }

  makeRolls () {
    const pinsLeft = 11
    this.rolls = []
    this.rolls[0] = Math.floor(Math.random() * pinsLeft)
    if (this.rolls[0] === 10) {
      this.rolls[1] = 0
    }
    if (this.rolls[0] !== 10) {
      this.rolls[1] = Math.floor(Math.random() * (pinsLeft - this.rolls[0]))
    }
    return this.rolls
  }

  // This will roll, the two chances that the player has per frame
  frames () {
    this.getScore(this.makeRolls())
  }

  strike (rolls) {
    const nextRolls = this.makeRolls()
    this.score += (rolls[0] + rolls[1] + nextRolls[0] + nextRolls[1])
    this.game.push([rolls, this.score])
  }

  spare (rolls) {
    const nextRolls = this.makeRolls()
    this.score += (rolls[0] + rolls[1]) + nextRolls[0]
    this.game.push(rolls, [this.score])
  }

  // This method makes the score for every frame
  getScore (rolls) {
    if (rolls[0] === 10) {
      this.strike(rolls)
    }
    if ((rolls[0] + rolls[1]) === 10) {
      this.spare(rolls)
    }
    this.score += rolls[0] + rolls[1]
    this.game.push([rolls, this.score])
  }

  lastShot () {
    this.frames()
  }

  getGame () {
    do {
      this.frames()
    } while (this.game.length <= 10)
    return this.game
  }
}
module.exports = BowlingGame
