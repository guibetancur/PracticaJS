import hamburgerMenu from "./index_retodom.js";
import {digitalClock, alarm} from "./section1.js";
import {moveBall} from "./section2.js";
import countdown from "./section3.js";

const d = document

d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu('.panel-btn', '.panel', '.menu a')
    digitalClock('#reloj','#btnReloj')
    alarm('./assets/alarma_despertador_relax.mp3', '#btnAlarma')
    // countdown('Apr 24, 2024 11:55:00','Felicitaciones')
    countdown('Apr 28, 2023 22:00:00','El plazo se ha cumplido... Felicitaciones')
})

d.addEventListener('keydown', e => {
    // shortcuts(e)
    moveBall(e,'.ball','.stage')
})