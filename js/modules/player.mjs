import { playerHeights, playerStartPositions, chickenImgs } from './helpers/constants.mjs'

export default class Player {
  constructor(level) {
    this.height = playerHeights[level]
    this.width = this.height * ((700 * 0.12 * (level + 2)) / (window.innerWidth * 0.9))
    this.positionX = 50
    this.positionY = playerStartPositions[level]
    this.speedY = level === 0 ? 3.5 : level === 1 ? 2.33 : 1.75
    this.speedX = this.speedY * ((700 * 0.12 * (level + 2)) / (window.innerWidth * 0.9))
    this.element = this.setPlayer()
  }
  setPlayer() {
    const character = document.createElement('div')
    character.id = 'player'
    character.style.width = `${this.width}%`
    character.style.height = `${this.height}%`
    character.style.left = `${this.positionX}%`
    character.style.bottom = `${this.positionY}%`
    character.style.backgroundImage = `url(${chickenImgs.up})`
    document.querySelector('#road').appendChild(character)
    return character
  }
  reset(level) {
    this.positionX = 50
    this.positionY = playerStartPositions[level]
  }
  move(arrow) {
    switch (arrow) {
      case 'ArrowLeft':
        document.getElementById('player').style.backgroundImage = `url(${chickenImgs.left})`
        this.positionX -= this.speedX
        break
      case 'ArrowRight':
        document.getElementById('player').style.backgroundImage = `url(${chickenImgs.right})`
        this.positionX += this.speedX
        break
      case 'ArrowDown':
        document.getElementById('player').style.backgroundImage = `url(${chickenImgs.down})`
        this.positionY -= this.speedY
        break
      case 'ArrowUp':
        document.getElementById('player').style.backgroundImage = `url(${chickenImgs.up})`
        this.positionY += this.speedY
        break
    }
    this.element.style.left = `${this.positionX}%`
    this.element.style.bottom = `${this.positionY}%`
  }
}
