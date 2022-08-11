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
    if (this.game.length === 10) {
      const nextRolls = this.makeRolls()
      this.score += (10 + nextRolls[0] + nextRolls[1])
      this.game.push([rolls, this.score])
    } else {
      const nextRolls = this.makeRolls()
      this.score += (10 + nextRolls[0] + nextRolls[1])
      this.game.push([rolls, this.score])
      this.getScore(nextRolls)
    }
  }

  spare (rolls) {
    if (this.game.length === 10) {
      const nextRolls = this.makeRolls()
      this.score += 10 + nextRolls[0]
      this.game.push([rolls, this.score])
    } else {
      const nextRolls = this.makeRolls()
      this.score += 10 + nextRolls[0]
      this.game.push([rolls, this.score])
      this.getScore(nextRolls)
    }
  }

  // This method makes the score for every frame
  getScore (rolls) {
    if (this.game.length <= 10) {
      if (rolls[0] === 10) {
        this.strike(rolls)
      }
      if ((rolls[0] + rolls[1]) === 10) {
        this.spare(rolls)
      }
      this.score += rolls[0] + rolls[1]
      this.game.push([rolls, this.score])
    }
  }

  getGame () {
    while (this.game.length <= 10) {
      this.frames()
    }
    return this.game
  }
}
module.exports = BowlingGame
