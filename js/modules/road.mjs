import { backgrounds } from './helpers/constants.mjs'

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
    road.style.position = 'relative'
    road.style.top = `${this.positionY}%`
    road.style.backgroundImage = `url(${backgrounds[level]})`

    document.querySelector('#board').appendChild(road)
  }
}
