const d = document

export default function formValidation() {
  const $form = d.querySelector('.contact-form')

  const $inputs = d.querySelectorAll('.contact-form [required]') // Todos los que tengan el atributo 'required'

  $inputs.forEach(input => {
    const $span = d.createElement('span')
    $span.id = input.name
    $span.textContent = input.title
    $span.classList.add('contact-form-error','none')
    input.insertAdjacentElement('afterend',$span) // Inserta el span luego del input correspondiente
  })
  d.addEventListener('keyup', e => {
    if (e.target.matches('.contact-form [required]')) {
      let $input = e.target,
      pattern = $input.pattern || $input.dataset.pattern

      if (pattern && $input.value !== '') {
        let regex = new RegExp(pattern)
        return !regex.exec($input.value)
        ? d.getElementById($input.name).classList.add('is-active')
        : d.getElementById($input.name).classList.remove('is-active')
      }
      
      if (!pattern) {
        return $input.value === ''
        ? d.getElementById($input.name).classList.add('is-active')
        : d.getElementById($input.name).classList.remove('is-active')
      }
    }
  })

  d.addEventListener('submit', e => {
    // e.preventDefault()
    const $loader = d.querySelector('.contact-form-loader'),
     $response = d.querySelector('.contact-form-response')

     $loader.classList.remove('none')
     
     setTimeout(() => {
       $loader.classList.add('none')
       $response.classList.remove('none')
       $form.reset()
       setTimeout(() => $response.classList.add('none'), 4000);
     }, 4000);
  })
}

// REVISAR: formsubmit.co para el envío de formularios sin usar Ajax (Debe llamarse desde el localhost o 127.0.0.1, NO desde la ruta del pc)


