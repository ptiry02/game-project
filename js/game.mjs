import Road from './road.mjs'
import Player from './player.mjs'
import Vehicle from './vehicle.mjs'

export default class Game {
  constructor() {
    this.player = null
    this.time = 0
    this.carsArr = []
  }
  start() {
    new Road(2)
    this.player = new Player()
    this.setEventListeners()
    setInterval(() => {
      if (this.time % 40 === 0) {
        const car = new Vehicle()
        this.carsArr.push(car)
      }
      this.carsArr.forEach((car) => {
        car.move()
      })
      this.time++
    }, 30)
  }
  setEventListeners() {
    document.addEventListener('keydown', (e) => {
      if (e.code === 'ArrowLeft' || e.code === 'ArrowRight' || e.code === 'ArrowUp' || e.code === 'ArrowDown') {
        this.player.move(e.code)
        console.log(e.code)
      }
    })
  }
}
