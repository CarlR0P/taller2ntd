function enviarFalso(event) {
    event.preventDefault();
    alert("¡Tu consulta ha sido enviada con éxito! Pronto recibirás información en tu correo.");
    document.querySelector("form").reset();
}
function irASeccion(id) {
    document.querySelectorAll('.seccion-oculta').forEach(seccion => {
        seccion.style.display = 'none';
    });

    document.getElementById(id).style.display = 'block';
}
window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

function toggleTexto(id) {
    let contenido = document.getElementById(id);
    contenido.classList.toggle("activo");
}


    // Ocultar el formulario al cargar la página
    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("formularioReserva").classList.add("hidden");
    });

    function mostrarFormulario(tipo) {
        // Muestra el formulario
        let formulario = document.getElementById("formularioReserva");
        formulario.classList.remove("hidden");

        // Cambia el texto para indicar el tipo de reserva
        document.getElementById("tipoReserva").innerText = `Tipo de reserva seleccionada: ${tipo}`;

        // Desplaza la página hacia el formulario
        formulario.scrollIntoView({ behavior: "smooth" });
    }

    document.getElementById("reservaForm").addEventListener("submit", function(event) {
        event.preventDefault();
        let nombre = document.getElementById("nombre").value;
        let personas = document.getElementById("personas").value;
        let fecha = document.getElementById("fecha").value;
        
        document.getElementById("mensaje").innerText = 
            `Gracias ${nombre}, tu reserva para ${personas} persona(s) el ${fecha} ha sido confirmada.`;
    });
