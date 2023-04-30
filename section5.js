const d= document
let sun='☀️', moon ='🌒'

export default function tema(modo,tema ) {
  const $temaBtn = d.querySelector(modo),
  $selectors = d.querySelectorAll('[data-modo]')
  
  d.addEventListener('click',e=>{
    if (e.target.matches(modo)) {
      if ($temaBtn.textContent === moon) {
        $selectors.forEach((el) => el.classList.add(tema))
        $temaBtn.textContent= sun
      } else {
        $selectors.forEach((el) => el.classList.remove(tema))
        $temaBtn.textContent= moon
      }
    }
  })
}