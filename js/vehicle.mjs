export default class Vehicle {
  constructor() {
    this.height = 8
    this.width = 10
    this.lane = this.selectLane()
    this.positionX = this.lane.className === 'lane left-lane' ? 90 : 0 - this.width
    this.car = this.create()
  }
  create() {
    const car = document.createElement('div')
    car.className = 'car'
    car.style.height = `${this.height}vh`
    car.style.width = `${this.width}vw`
    car.style.backgroundColor = 'red'
    car.style.left = `${this.positionX}vw`

    this.lane.appendChild(car)
    return car
  }
  selectLane() {
    const lanes = document.querySelectorAll('.lane')
    const random = Math.floor(Math.random() * lanes.length)
    console.log(random)
    return lanes[random]
  }
  move() {
    if (this.lane.className === 'lane left-lane') {
      this.positionX--
      this.car.style.left = `${this.positionX}vw`
    } else {
      this.positionX++
      this.car.style.left = `${this.positionX}vw`
    }
  }
}
