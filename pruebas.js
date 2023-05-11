function reporteDePasajeros(estaciones) {
  let pasajeros = 200, reporte = ['En la estación 0 hay 200 pasajeros arriba del tren'], i=0
  while (estaciones>i) {
      i ++
      if (i===5) {
          pasajeros += 40
      } else {
      pasajeros += 20
      }
      reporte.push('En la estación '+i+' hay '+pasajeros+' pasajeros arriba del tren')
    }
  return reporte
}
console.log(reporteDePasajeros(5))

let laClaveSecreta = (["a", "*", "d", "a", "r", "f", "*", "i", "c", "*", "s", "e", "d", " ", "e", "*", "v", "a", "l", "C"])
let cadena = laClaveSecreta.reverse().join('','').replace(/\*/gm,'')
console.log(cadena)
console.log(cadena.replace(/\*/g,''))