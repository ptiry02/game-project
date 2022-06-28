export default class Road {
  constructor(numberOfLanes) {
    this.height = 12 * numberOfLanes
    //this.positionY =
    this.element = this.setRoad(numberOfLanes)
  }
  setRoad(numberOfLanes) {
    const road = document.createElement('div')

    road.style.height = `${this.height}vh`
    road.style.width = '100%'
    road.style.position = 'absolute'
    road.style.bottom = `${(700 - 700 * 0.12 * numberOfLanes) / 2}`
    road.style.backgroundColor = '#525252'

    document.querySelector('#board').appendChild(road)

    /*for (let i = 1; i <= numberOfLanes; i++) {
      const lane = document.createElement('div')
      lane.className = 'lane'
      this.parent.appendChild(lane)
    }
    const lanes = this.parent.querySelectorAll('.lane')
    lanes.forEach((lane, i) => {
      i === 0 ? (lane.style.borderTop = '4px solid white') : (lane.style.borderTop = '2px dashed white')
      i === lanes.length - 1
        ? (lane.style.borderBottom = '4px solid white')
        : (lane.style.borderBottom = '2px dashed white')
      i % 2 ? (lane.className = 'lane right-lane') : (lane.className = 'lane left-lane')
    })
    return lanes*/
  }
}
