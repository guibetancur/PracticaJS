const d = document, tarjetas = d.querySelectorAll('.card').length, noCriteria = d.getElementById('noCriteria')

export default function filtro(input, selector) {
   d.addEventListener('keyup', e => {
      if (e.target.matches(input)) {
         // Esta línea es innecesaria en Chrome porque ESC borra el campo tipo Search
         // if (e.key === 'Escape') e.target.value = ''

         d.querySelectorAll(selector).forEach((el) => 
            el.textContent.toLowerCase().includes(e.target.value) 
            ? el.classList.remove('filter') 
            : el.classList.add('filter')
         )
      }
      d.querySelectorAll('.filter').length === tarjetas ? noCriteria.textContent='No hay coincidencias' : noCriteria.textContent = ''
   })
}