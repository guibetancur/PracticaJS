const d = document, w = window

export default function narrador() {
  const $speechSelect = d.getElementById('speech-select'),
  $speechTextarea = d.getElementById('speech-text'),
  $speechBtn = d.getElementById('speech-btn')

  // Almacenar las voces de la API
  const speechMessage = new SpeechSynthesisUtterance()
  let voices = []

  d.addEventListener('DOMContentLoaded', (e) => {
    w.speechSynthesis.addEventListener('voiceschanged', (e) => {
      voices = w.speechSynthesis.getVoices()
      console.log(voices)

      voices.forEach((voice) => {
        const $option = d.createElement('option')
        $option.value = voice.name
        $option.textContent = `${voice.name} (${voice.lang})`

        $speechSelect.appendChild($option)
      })
    })
  })
  
  d.addEventListener('change', e => {
    if (e.target === $speechSelect) {
      speechMessage.voice = voices.find(voice => voice,nane === e.target.value)
    }
  })
  
  d.addEventListener('click', e => {
    if (e.target === $speechBtn) {
      speechMessage.text = $speechTextarea.value
      w.speechSynthesis.speak(speechMessage)
    }
  })
}