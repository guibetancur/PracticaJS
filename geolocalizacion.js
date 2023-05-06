const d = document, n = navigator

export default function getGeolocation(id) {
   // debuggerÇ
   const $id = d.getElementById(id),
      options = {
         enableHighAccuracy: true, // La mejor lectura posible
         timeout: 5000, // Esperar la respuesta
         maximumAge: 0 // Evitar que se guarde cache 
      }

   const success = position => {
      let coords = position.coords

      $id.innerHTML = `
      <p>Tu posición actual es:</p>
      <ul>
         <li>Latitud: <b>${coords.latitude}</b></li>
         <li>Longitud: <b>${coords.longitude}</b></li>
         <li>Precisión: <b>${coords.accuracy}</b> metros</li>
      </ul>
      <a href='https://www.google.com/maps/@${coords.latitude},${coords.longitude},20z' target='_blank' rel='noopener'>Ver en Google Maps</a>
      `
   }

   const error = err => $id.innerHTML = `<p><mark>Error ${err.code}: ${err.message}</mark></p>`

   n.geolocation.getCurrentPosition(success, error, options)
   // tarea... consultar el watchposition() que permite actualizar continuamente la posición (waze y otros)
}