export default class Player {
  constructor() {
    this.height = 6
    this.width = this.height * (700 / (window.innerWidth * 0.9))
    this.positionX = 45
    this.positionY = 5
    this.speedY = 3
    this.speedX = this.speedY * (window.innerHeight / window.innerWidth)
    this.element = this.setPlayer()
  }
  setPlayer() {
    const character = document.createElement('div')
    character.id = 'player'
    character.style.width = `${this.width}%`
    character.style.height = `${this.height}%`
    character.style.backgroundColor = 'blue'
    character.style.position = 'absolute'
    character.style.left = `${this.positionX}%`
    character.style.bottom = `${this.positionY}%`
    character.style.borderRadius = '4px'
    character.style.transition = `all 0.3s ease`
    document.querySelector('#board').appendChild(character)
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
    this.element.style.left = `${this.positionX}vw`
    this.element.style.bottom = `${this.positionY}vh`
  }
}
