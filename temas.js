const d = document
let sun = '☀️', moon = '🌒'


export default function tema(boton, tema) {
  
  const $temaBtn = d.querySelector(boton),
    $selectors = d.querySelectorAll('[data-modo]')

  const darkMode = () => {
    $selectors.forEach((el) => el.classList.add(tema))
    $temaBtn.textContent = sun
    localStorage.setItem('tema', 'dark')
  }

  const lightMode = () => {
    $selectors.forEach((el) => el.classList.remove(tema))
    $temaBtn.textContent = moon
    localStorage.setItem('tema', 'light')
  }

  d.addEventListener('click', e => {
    
    if (e.target.matches(boton)) {
      if ($temaBtn.textContent === moon) { darkMode() } else lightMode()
    }
  })

  d.addEventListener('DOMContentLoaded', e => {
    if (localStorage.getItem('tema') === null) localStorage.setItem('tema', 'light')
    if (localStorage.getItem('tema') === 'light') lightMode()
    if (localStorage.getItem('tema') === 'dark') darkMode()
  })
}
