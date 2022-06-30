import { LanePositions, vehicleHeights, carImgs } from './helpers/constants.mjs'

export default class Vehicle {
  constructor(level) {
    this.height = vehicleHeights[level]
    this.width = 7
    this.road = document.getElementById('road')
    const { lane, side } = this.setRandomLane(level)
    this.positionY = lane
    this.positionX = side
    this.car = this.create(level)
  }
  create() {
    const car = document.createElement('div')
    car.className = 'car'
    car.style.height = `${this.height}%`
    car.style.width = `${this.width}%`
    car.style.left = `${this.positionX}%`
    car.style.bottom = `${this.positionY}%`
    car.style.backgroundImage = this.positionX === 100 ? `url(${carImgs.left})` : `url(${carImgs.right})`

    this.road.appendChild(car)
    return car
  }
  setRandomLane(level) {
    const random = Math.floor(Math.random() * (level + 2))
    const lane = LanePositions[level][random]
    const side = random % 2 ? 100 : -10
    return { lane, side }
  }
  move() {
    if (
      this.positionY === 10 ||
      this.positionY === 5 ||
      this.positionY === 4 ||
      this.positionY === 71 ||
      this.positionY === 54
    ) {
      this.positionX++
      this.car.style.left = `${this.positionX}%`
    }
    if (this.positionY === 60 || this.positionY === 38 || this.positionY === 29 || this.positionY === 79) {
      this.positionX--
      this.car.style.left = `${this.positionX}%`
    }
  }
}
