const d = document, n = navigator

export default function webCam (id) {
   const $video = d.getElementById(id)
   if (n.mediaDevices.getUserMedia) {  // valida si el navegador la soporta
       // Esta es una promesa
      n.mediaDevices.getUserMedia({video:true, audio:false})
      .then(stream => {
         $video.srcObject = stream
         $video.play()
      })
      .catch(err => {
         $video.insertAdjacentHTML('beforebegin',`<p>Se presentó un error: <mark>${err}</mark></p>`)
      })
   }
}