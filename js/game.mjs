import Road from './road.mjs'
import Player from './player.mjs'

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
    /*setInterval(() => {
      if (this.time % 40 === 0) {
        const car = new Vehicle()
        this.carsArr.push(car)
      }
      this.carsArr.forEach((car) => {
        car.move()
      })
      this.time++
    }, 30)*/
  }
  setEventListeners() {
    document.addEventListener('keydown', (e) => {
      if (e.code === 'ArrowLeft' || e.code === 'ArrowRight') {
        this.player.moveX(e.code)
      }
      if (e.code === 'ArrowUp' || e.code === 'ArrowDown') {
        this.player.moveY(e.code)
      }
    })
  }
}
