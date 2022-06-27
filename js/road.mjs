import Vehicle from './vehicle.mjs'

export default class Road {
  constructor(numberOfLanes) {
    this.parent = document.getElementById('board')
    this.lanes = this.setRoad(numberOfLanes)
    this.carsArr = []
    this.time = 0
  }
  setRoad(numberOfLanes) {
    for (let i = 1; i <= numberOfLanes; i++) {
      const lane = document.createElement('div')
      this.parent.appendChild(lane)
    }
    const street = this.parent.getElementsByTagName('div')
    const lanes = [...street]
    lanes.forEach((lane, i) => {
      i === 0 ? (lane.style.borderTop = '4px solid white') : (lane.style.borderTop = '2px dashed white')
      i === lanes.length - 1
        ? (lane.style.borderBottom = '4px solid white')
        : (lane.style.borderBottom = '2px dashed white')
      i % 2 ? (lane.className = 'lane right-lane') : (lane.className = 'lane left-lane')
    })
    return lanes
  }
}
