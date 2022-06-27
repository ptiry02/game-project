export default class Road {
  constructor() {
    this.parent = document.getElementById('board')
    this.topLane = this.addTop()
    this.bottomLane = this.addBottom()
  }
  addTop() {
    const topLane = document.createElement('div')
    topLane.id = 'top-lane'

    this.parent.appendChild(topLane)
  }
  addBottom() {
    const bottomLane = document.createElement('div')
    bottomLane.id = 'bottom-lane'

    this.parent.appendChild(bottomLane)
  }
}
