import hamburgerMenu from "./index_retodom.js";
import { digitalClock, alarm } from "./section1.js";

const d = document

d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu('.panel-btn', '.panel', '.menu a')
    digitalClock('#reloj','#btnReloj')
    alarm('./assets/alarma_despertador_relax.mp3', '#btnAlarma')
})
