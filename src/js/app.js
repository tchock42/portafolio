document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
});

function iniciarApp(){
    vistaMobile();
    mostrarModal();
    mapa();
}

function vistaMobile(){
    const boton = document.querySelector('.icono-mobile');

    boton.addEventListener('click', mostrarMenu);
}
function mostrarMenu(){
    const mostrar = document.querySelector('.menu');
    mostrar.classList.toggle('mostrar');
}

function mostrarModal(){
    const iconos = document.querySelectorAll('.avatar');

    iconos.forEach(icono => {
        icono.addEventListener('click', function(){
            //creacion del overlay
            const overlay = document.createElement('DIV');
            overlay.classList.add('overlay');
            const body = document.querySelector('body');
            body.appendChild(overlay);
            //creacion del modal
            const modal = document.createElement('DIV')
            modal.innerHTML = `
                <div class="modal-encabezado">

                    <picture>
                        <source srcset="build/img/avatar-2092113_640.avif" type="image/avif">
                        <source srcset="build/img/avatar-2092113_640.webp" type="image/webp">
                        <img src="build/img/avatar-2092113_640.png" alt="avatar">
                    </picture>
                    
                    <div class="modal-heading">
                        <h3>Jacob Gómez Carrillo</h3>
                        <p>Mechatronics Engineer</p>
                        <p>Nezahualcóyotl, México, México</p>
                    </div>
                </div>
                <p>My name is Jacob, I am an engineer that has many faces, one of them related to software 
                development. I have studied for years MEAR technologies and now I want to explore my frontend
                and backend knowledge in the industry</p>
                
                <div class="modal-botones">
                    <div class="available">
                        <p>Freelance</p>
                        <h4>Available</h4>
                    </div>
                    <a href="https://drive.google.com/file/d/1dSi9DFCx3KqlcKHK03mfzFkdx1Wv0vkl/view?usp=drive_link" target="_blank"><button class="modal-boton">See CV<span></span></button></a>
                </div>
                
            `;
            modal.classList.add('modal');
            body.appendChild(modal);
            
            //cerrar modal
            overlay.addEventListener('click', () => {
                overlay.style.display = 'none';
                modal.style.display = 'none';
            })
        });
    })
}
function mapa(){
    const lat = 19.43271;
    const lng = -99.133386;
    const zoom = 16;
    const map = L.map('mapa').setView([lat, lng], zoom);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([lat, lng]).addTo(map)
        .bindPopup(`
            <h2 class = "mapa__heading">Jacob Gómez Carrillo</h2>
            <p class = "mapa__texto">Web Developer</p>
        `)
        .openPopup();
}