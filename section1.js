const d = document
const boton = d.querySelector('#btnReloj')
const relojText = d.querySelector('#reloj')
let switche = false
let activado

function timer(clock) {
  let clockRT = new Date().toLocaleTimeString()
  relojText.innerHTML = `<h3>${clockRT}</h3>`
}

// Solucion de Guillermo Betancur 2023/04/27
// Podría evaluarse reducir el uso de variables iniciales
export function digitalClock(clock, btn) {
  d.addEventListener('click', e => {
    if (e.target.matches(btn)) {
      switche = !switche
      boton.innerHTML = switche ? 'Desactivar Reloj' : 'Activar Reloj'
      debugger
      if (switche) {
        activado = setInterval(timer, 1000)
      }
      else {
        clearInterval(activado)
        // d.querySelector(clock).innerHTML = ''
      }
    }
  })
}

export function alarm() {

}

/*
const reloj = d.querySelector('.reloj')
reloj.addEventListener('click', e => {
  let interval = setInterval(clock, 1000)
  reloj.innerHTML = reloj.innerHTML === 'Desactivar Reloj' ? 'Activar Reloj' : 'Desactivar Reloj'
})

const alarma = d.querySelector('.alarma')
alarma.addEventListener('click', e => {
  alarma.innerHTML = alarma.innerHTML === 'Desactivar Alarma' ? 'Activar Alarma' : 'Desactivar Alarma'
})

function clock() {
  const hora = document.getElementById('hora')
  const minuto = document.getElementById('minuto')
  const segundo = document.getElementById('segundo')
  let h = new Date().getHours()
  let m = new Date().getMinutes()
  let s = new Date().getSeconds()
  hora.innerHTML = h + ' :'
  minuto.innerHTML = m + ' :'
  segundo.innerHTML = s
}

}
*/