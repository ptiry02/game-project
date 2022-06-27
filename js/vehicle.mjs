export default class Vehicle {
  constructor() {
    this.positionX = 0
    this.height = 8
    this.lane = this.selectLane()
    this.vehicle = this.create()
  }
  create() {
    const car = document.createElement('div')
    car.className = 'car'

    this.lane.appendChild(car)
  }
  selectLane() {
    const lanes = document.getElementById('board').getElementsByTagName('div')
    const random = Number(Math.random().toFixed(0)) * (lanes.length - 1)
    console.log('number: ', random)
    return lanes[random]
  }
  moveLeft() {
    this.positionX--
  }
  moveRight() {}
}
