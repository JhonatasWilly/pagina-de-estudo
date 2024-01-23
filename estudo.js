let primeiroh2 = document.querySelector('h2')
let h2rect = primeiroh2.getBoundingClientRect()

console.log(h2rect.top)

const small = window.matchMedia('(max-width: 600px)')

console.log(small)

const img = document.querySelector('img')

img.addEventListener('click', function () {
  console.log('Clicou!')
})

const animaisLista = document.querySelector('.animais-lista')

function callbackLista(event) {
  console.log(event.target)
}

animaisLista.addEventListener('click', callbackLista)

const h1 = document.querySelector('h1')

function handleEvent(event) {
  console.log(event.type, event)
}

//h1.addEventListener('mousemove', handleEvent)

//window.addEventListener('scroll', handleEvent)

//window.addEventListener('resize', handleEvent)

//window.addEventListener('keydown', handleEvent)

//window.addEventListener('keyup', handleEvent)

function handleKeyboard(event) {
  if (event.key === 'a') {
    document.body.classList.toggle('azul')
  }
}

window.addEventListener('keydown', handleKeyboard)

const linksInternos = document.querySelectorAll('a[href^="#"]')

function handleLink(event) {
  event.preventDefault()
  linksInternos.forEach(link => {
    link.classList.remove('ativo')
  })
  event.currentTarget.classList.add('ativo')
}

linksInternos.forEach(link => {
  link.addEventListener('click', handleLink)
})

const todosElementos = document.querySelectorAll('body *')

function handleElemento(event) {
  event.currentTarget.remove()
}

todosElementos.forEach(element => {
  element.addEventListener('click', handleElemento)
})

console.log(todosElementos)

function handleClickT(event) {
  if (event.key === 't') {
    document.documentElement.classList.toggle('textomaior')
  }
}

window.addEventListener('keydown', handleClickT)


