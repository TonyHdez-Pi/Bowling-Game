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

  // This method makes the score for every frame
  getScore () {
    for (let i = 0; i < this.game.length; i++) {
      // if the firs roll, give us a 10, then its a strike, so the strike bonus is apply
      if (this.game[i][0] === 10) {
        this.score += (this.game[i + 1][0] + this.game[i + 1][1])
      }
      // if the second roll give us a 10, then is a spare, so spare bonus is apply
      if (this.game[i][0] === 0 && this.game[i][1] === 10) {
        this.score += this.game[i + 1][0]
      }
      // if none of this conditions are apply, then just adds the first and second roll to score.
      this.score += (this.game[i][0] + this.game[i][1])
    }
    return this.score
  }

  getFrames () {
    for (let i = 0; i < 10; i++) {
      this.frames()
    }
    return this.rolls
  }

  getGame () {
    return this.game
  }
}
module.exports = BowlingGame
