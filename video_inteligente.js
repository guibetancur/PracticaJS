const d = document, w = window

export default function smartVideo() {
  const $videos = d.querySelectorAll('video[data-smart-video]')

  const cb = entries => {
    entries.forEach(entry => {
      // Para que pause o siga si tiene o no el foco dentro de la página
      // Ver SCROLL_SPY.JS que define el intersectionObserver
      if (entry.isIntersecting) {
        entry.target.play()
      } else entry.target.pause()

      // Para que no se siga reproduciendo al perder el foco por cambio de pestaña o app
      w.addEventListener('visibilitychange', e =>
        d.visibilityState === 'visible'
          ? entry.target.play()
          : entry.target.pause()
      )
    });
  }
  const observer = new IntersectionObserver(cb, { threshold: 0.5 })

  $videos.forEach(el => observer.observe(el))
}