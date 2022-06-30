import Road from './road.mjs'
import Player from './player.mjs'
import Vehicle from './vehicle.mjs'

export default class Game {
  constructor() {
    this.player = null
    this.time = 0
    this.carsArr = []
    this.keyState = { key: '' }
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
    }
  }
  setTrafficLevel(level) {
    const { trafficAmount, trafficSpeed } = this.setDificulty(level)
    setInterval(() => {
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
          console.log('collision detected !!')
        }
        if (car.positionX + car.width === -10 || car.positionX + car.width === 120) {
          this.carsArr.shift()
          car.car.remove()
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
}
