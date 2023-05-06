const d = document 

export default function sorteo(btn, selector) {
   const getWinner = selector => {
      const $players = d.querySelectorAll(selector),
      random = Math.floor(Math.random() * $players.length),
      winner = $players[random]

      return `El Ganador es: ${winner.textContent}`
   }

   d.addEventListener('click', e => {
      if (e.target.matches(btn)) {
         let result = getWinner(selector)
         alert(result)
      }
   })
}