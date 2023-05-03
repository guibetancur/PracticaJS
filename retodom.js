import hamburgerMenu from "./index_retodom.js";
import {digitalClock, alarm} from "./section1.js";
import {moveBall} from "./section2.js";
import countdown from "./section3.js";
import botonHome from "./botonhome.js";
import tema from "./temas.js";
import responsiveMedia from "./responsive.js";

const d = document

d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu('.panel-btn', '.panel', '.menu a')
    digitalClock('#reloj','#btnReloj')
    alarm('./assets/alarma_despertador_relax.mp3', '#btnAlarma')
    countdown('Jul 17, 2023 00:00:00','Felicitaciones')
    // countdown('Apr 28, 2023 22:00:00','El plazo se ha cumplido... Felicitaciones')
    botonHome('.scroll-top-btn')
    responsiveMedia('youtube','(min-width: 1024px)',`<a href='https://youtu.be/JSwu8PL-Z7s' target='_blank' rel='noopener'>Ver video</<a>`,`<iframe width="560" height="315" src="https://www.youtube.com/embed/JSwu8PL-Z7s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`)
    responsiveMedia('gmaps','(min-width: 1024px)',`<a href='https://www.google.com/maps/@6.2649263,-75.5776751,14.5z' target='_blank' rel='noopener'>Ver mapa</<a>`,`<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31727.927191164243!2d-75.5776751!3d6.2649263!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44291049b3e057%3A0xe2496319a7e30efa!2sTiendas%20D1%20El%20Diamante!5e0!3m2!1ses-419!2sco!4v1683075788103!5m2!1ses-419!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`)
})

d.addEventListener('keydown', e => {
    // shortcuts(e)
    moveBall(e,'.ball','.stage')
})

tema('.btnTema','modo')

