const d = document, w=window


export default function botonHome (btn) {
  const $scrollBtn = d.querySelector(btn)

  // w.pageYOffset y d.documentElement.scrollTop permiten ver la posición desde el top de la página
  w.addEventListener('scroll',e => {
    // let scrollTop = w.pageYOffset || d.documentElement.scrollTop
    let scrollTop = d.documentElement.scrollTop
    if (scrollTop>600) {
      // $scrollBtn.classList.toggle('hidden')
      $scrollBtn.classList.remove('hidden')
    } else $scrollBtn.classList.add('hidden')
  })

  d.addEventListener('click',e => {
    if (e.target.matches(btn)) {
      w.scrollTo({
        behavior: 'smooth',
        top: 0
      })
    }
  })
}