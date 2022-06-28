export default class Player {
  constructor() {
    this.height = 6
    this.width = this.height * (window.innerHeight / window.innerWidth)
    this.positionX = 45
    this.positionY = 5
    this.element = this.setPlayer()
  }
  setPlayer() {
    const character = document.createElement('div')
    character.id = 'player'
    character.style.width = `${this.width}vw`
    character.style.height = `${this.height}vh`
    character.style.backgroundColor = 'blue'
    character.style.position = 'absolute'
    character.style.left = `${this.positionX}vw`
    character.style.bottom = `${this.positionY}vh`
    document.querySelector('#board').appendChild(character)
    return character
  }
  moveX(arrow) {
    if (arrow === 'ArrowLeft') {
      this.positionX--
      this.element.style.left = `${`${this.positionX}vw`}`
    }
    if (arrow === 'ArrowRight') {
      this.positionX++
      this.element.style.left = `${`${this.positionX}vw`}`
    }
  }
  moveY(arrow) {
    if (arrow === 'ArrowDown') {
      this.positionY--
      this.element.style.bottom = `${`${this.positionY}vw`}`
    }
    if (arrow === 'ArrowUp') {
      this.positionY++
      this.element.style.bottom = `${`${this.positionY}vw`}`
    }
  }
}
