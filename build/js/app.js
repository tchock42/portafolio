function iniciarApp(){vistaMobile(),mostrarModal(),mapa()}function vistaMobile(){document.querySelector(".icono-mobile").addEventListener("click",mostrarMenu)}function mostrarMenu(){document.querySelector(".menu").classList.toggle("mostrar")}function mostrarModal(){document.querySelectorAll(".avatar").forEach(e=>{e.addEventListener("click",(function(){var e,a;if(!document.querySelector(".overlay")){(e=document.createElement("DIV")).classList.add("overlay");const n=document.querySelector("body");n.appendChild(e),(a=document.createElement("DIV")).innerHTML='\n                    <div class="modal-encabezado">\n\n                        <picture>\n                            <source srcset="build/img/avatar-2092113_640.avif" type="image/avif">\n                            <source srcset="build/img/avatar-2092113_640.webp" type="image/webp">\n                            <img src="build/img/avatar-2092113_640.png" alt="avatar">\n                        </picture>\n                        \n                        <div class="modal-heading">\n                            <h3>Jacob Gómez Carrillo</h3>\n                            <p>Mechatronics Engineer</p>\n                            <p>Nezahualcóyotl, México, México</p>\n                        </div>\n                    </div>\n                    <p>My name is Jacob, I am an engineer that has many faces, one of them related to software \n                    development. I have studied for years MEAR technologies and now I want to explore my frontend\n                    and backend knowledge in the industry</p>\n                    \n                    <div class="modal-botones">\n                        <div class="available">\n                            <p>Freelance</p>\n                            <h4>Available</h4>\n                        </div>\n                        <a href="https://drive.google.com/file/d/1dSi9DFCx3KqlcKHK03mfzFkdx1Wv0vkl/view" target="_blank"><button class="modal-boton">See CV<span></span></button></a>\n                    </div>\n                    \n                ',a.classList.add("modal"),n.appendChild(a)}e.addEventListener("click",()=>{e.style.display="none",a.style.display="none",e.remove(),a.remove()})}))})}function mapa(){if(document.querySelector("#mapa")){const e=19.43271,a=-99.133386,n=16,t=L.map("mapa").setView([e,a],n);L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(t),L.marker([e,a]).addTo(t).bindPopup('\n                <h2 class = "mapa__heading">Jacob Gómez Carrillo</h2>\n                <p class = "mapa__texto">Web Developer</p>\n            ').openPopup()}}document.addEventListener("DOMContentLoaded",(function(){iniciarApp()}));
//# sourceMappingURL=app.js.map
