import Road from './road.mjs'
import Player from './player.mjs'
import Vehicle from './vehicle.mjs'

export default class Game {
  constructor() {
    this.player = null
    this.time = 0
    this.carsArr = []
  }
  start(level) {
    new Road(level)
    this.player = new Player(level)
    this.setEventListeners()
    setInterval(() => {
      if (this.time % 40 === 0) {
        this.carsArr.push(new Vehicle(level))
      }
      this.carsArr.forEach((car) => {
        car.move()
        if (
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
    }, 30)
  }
  setEventListeners() {
    document.addEventListener('keydown', (e) => {
      if (e.code === 'ArrowLeft' || e.code === 'ArrowRight' || e.code === 'ArrowUp' || e.code === 'ArrowDown') {
        this.player.move(e.code)
      }
    })
  }
}
