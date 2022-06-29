const LanePositions = [
  [10, 60],
  [5, 38, 71],
  [4, 29, 54, 79],
]

export default class Vehicle {
  constructor(level) {
    this.height = 7
    this.width = 9
    this.road = document.getElementById('road')
    const { lane, side } = this.setRandomLane(level)
    this.positionY = lane
    this.positionX = side
    this.car = this.create(level)
  }
  create() {
    console.log(this.positionY)
    const car = document.createElement('div')
    car.className = 'car'
    car.style.height = `${this.height}vh`
    car.style.width = `${this.width}vw`
    car.style.backgroundColor = 'red'
    car.style.left = `${this.positionX}%`
    car.style.bottom = `${this.positionY}%`

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
