import { playerHeights } from './helpers/constants.mjs'
import { playerStartPositions } from './helpers/constants.mjs'

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
    document.querySelector('#road').appendChild(character)
    return character
  }
  move(arrow) {
    switch (arrow) {
      case 'ArrowLeft':
        this.positionX -= this.speedX
        break
      case 'ArrowRight':
        this.positionX += this.speedX
        break
      case 'ArrowDown':
        this.positionY -= this.speedY
        break
      case 'ArrowUp':
        this.positionY += this.speedY
        break
    }
    this.element.style.left = `${this.positionX}%`
    this.element.style.bottom = `${this.positionY}%`
  }
}
