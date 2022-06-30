import Game from './modules/game.mjs'

let game

const startBtns = document.querySelectorAll('.button')
startBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const modals = document.querySelectorAll('.modal')
    modals.forEach((modal) => {
      modal.style.display = 'none'
    })
    if (e.target.id === 'start-btn') {
      game = new Game()
      game.start(0)
      return
    }
    if (e.target.innerText === 'level 2') {
      game = new Game()
      game.start(1)
    }
    if (e.target.innerText === 'level 3') {
      game = new Game()
      game.start(2)
      return
    }
  })
})
