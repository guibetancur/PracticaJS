const d = document
const botonReloj = d.querySelector('#btnReloj')
const relojText = d.querySelector('#reloj')
const botonAlarma = d.querySelector('#btnAlarma')
let switcheReloj = false, switcheAlarm = false
let activado, alarmTempo
const $alarm = d.createElement("audio")

function timer(clock) {
  let clockRT = new Date().toLocaleTimeString()
  relojText.innerHTML = `<h3>${clockRT}</h3>`
}

// Solucion de Guillermo Betancur 2023/04/27
// Podría evaluarse reducir el uso de variables iniciales
export function digitalClock(clock, btn) {
  d.addEventListener('click', e => {
    if (e.target.matches(btn)) {
      switcheReloj = !switcheReloj
      botonReloj.innerHTML = switcheReloj ? 'Desactivar Reloj' : 'Activar Reloj'
      if (switcheReloj) {
        activado = setInterval(timer, 1000)
      }
      else {
        clearInterval(activado)
        // d.querySelector(clock).innerHTML = '' // o podría ser...
        relojText.innerHTML = ''
      }
    }
  })
}

export function alarm(sound, btn) {
  $alarm.src = sound
  d.addEventListener('click', e => {
    console.log(e.target, btn)
    if (e.target.matches(btn)) {
      switcheAlarm = !switcheAlarm
      botonAlarma.innerHTML = switcheAlarm ? 'Desactivar Alarma' : 'Activar Alarma'
      if (switcheAlarm) {
        alarmTempo = setTimeout(() => {
          $alarm.play()
        })
      } else {
        clearTimeout(alarmTempo)
        $alarm.pause()
        $alarm.currentTime = 0
      }
    }
  })
}
