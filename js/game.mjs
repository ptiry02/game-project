import Road from './road.mjs'
import Vehicle from './vehicle.mjs'

export default class Game {
  constructor() {
    this.player = null
    this.time = 0
    this.carsArr = []
  }
  start() {
    const street = new Road(2)
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
}
