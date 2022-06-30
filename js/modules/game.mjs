import Road from './road.mjs'
import Player from './player.mjs'
import Vehicle from './vehicle.mjs'

export default class Game {
  constructor() {
    this.player = null
    this.time = 0
    this.carsArr = []
    this.keyState = { key: '' }
    this.game
  }
  start(level) {
    new Road(level)
    setTimeout(() => (this.player = new Player(level)), 3000)
    this.setEventListeners()
    this.setTrafficLevel(level)
  }
  setEventListeners() {
    window.addEventListener(
      'keydown',
      (e) => {
        this.keyState[e.code] = true
        this.keyState.key = e.code
      },
      true
    )
    window.addEventListener(
      'keyup',
      (e) => {
        this.keyState[e.code] = false
      },
      true
    )
  }
  setPlayerMovement() {
    if (
      (this.player && this.keyState['ArrowLeft']) ||
      this.keyState['ArrowRight'] ||
      this.keyState['ArrowUp'] ||
      this.keyState['ArrowDown']
    ) {
      this.player.move(this.keyState.key)
      console.log(Math.floor(this.player.positionY))
    }
  }
  setTrafficLevel(level) {
    const { trafficAmount, trafficSpeed } = this.setDificulty(level)
    this.game = setInterval(() => {
      this.setPlayerMovement()

      if (this.time % trafficAmount === 0) {
        this.carsArr.push(new Vehicle(level))
      }
      this.carsArr.forEach((car) => {
        car.move()
        if (
          this.player &&
          this.player.positionX < car.positionX + car.width &&
          this.player.positionX + this.player.width > car.positionX &&
          this.player.positionY < car.positionY + car.height &&
          this.player.positionY + this.player.height > car.positionY
        ) {
          this.gameOver()
        }
        if (car.positionX + car.width === -10 || car.positionX + car.width === 120) {
          this.carsArr.shift()
          car.car.remove()
        }
        if (
          this.player &&
          level < 2 &&
          (Math.floor(this.player.positionY) === 114 || Math.floor(this.player.positionY) === 113)
        ) {
          this.newLevel(level + 1)
        }
        if (this.player && level === 2 && Math.floor(this.player.positionY) === 107) {
          this.finish()
        }
      })
      this.time++
    }, trafficSpeed)
  }
  setDificulty(level) {
    const trafficAmount = level === 0 ? 27 : level === 1 ? 20 : 15
    const trafficSpeed = level === 0 ? 25 : level === 1 ? 25 : 25
    return { trafficAmount, trafficSpeed }
  }
  newLevel(level) {
    setTimeout(() => {
      clearInterval(this.game)
      document.getElementById('road').remove()
      const nextLevel = document.getElementById('next-level')
      nextLevel.querySelector('#next-level-btn').innerText = `level ${level + 1}`
      nextLevel.style.display = 'flex'
      this.player.reset(level)
    }, 100)
  }
  finish() {
    setTimeout(() => {
      clearInterval(this.game)
      document.getElementById('road').remove()
      const finish = document.getElementById('finish')
      finish.style.display = 'flex'
      this.player.reset(0)
    }, 100)
  }
  gameOver() {
    setTimeout(() => {
      clearInterval(this.game)
      document.getElementById('road').remove()
      const gameOver = document.getElementById('game-over')
      gameOver.style.display = 'flex'
      this.player.reset(0)
    }, 100)
  }
}
