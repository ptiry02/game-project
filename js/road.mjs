const backgrounds = ['./assets/roads/2-lane.png', './assets/roads/3-lane.png', './assets/roads/4-lane.png']

export default class Road {
  constructor(level) {
    this.height = 12 * (level + 2)
    this.positionY = (100 - this.height) / 2
    this.element = this.setRoad(level)
  }
  setRoad(level) {
    const road = document.createElement('div')

    road.id = 'road'
    road.style.height = `${this.height}%`
    road.style.width = '100%'
    road.style.position = 'absolute'
    road.style.bottom = `${this.positionY}%`
    road.style.backgroundImage = `url(${backgrounds[level]})`

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
