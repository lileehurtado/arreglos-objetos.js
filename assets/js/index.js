import { propiedades_alquiler } from './propiedades.js'
import { propiedades_venta } from './propiedades.js';

console.log('El archivo JS se ha cargado correctamente') 

document.addEventListener('DOMContentLoaded', function () {
    const propiedadesVentaContainer = document.getElementById('propiedadesVentaContainer');
    const propiedadesAlquilerContainer = document.getElementById('propiedadesAlquilerContainer');

    // Muestra las primeras 3 propiedades en venta
    for (let i = 0; i < 3 && i < propiedades_venta.length; i++) {
        const propiedad = propiedades_venta[i];
        const propiedadHTML = construirHTMLPropiedad(propiedad);
        propiedadesVentaContainer.innerHTML += propiedadHTML;
    }

    // Muestra las primeras 3 propiedades en alquiler
    for (let i = 0; i < 3 && i < propiedades_alquiler.length; i++) {
        const propiedad = propiedades_alquiler[i];
        const propiedadHTML = construirHTMLPropiedad(propiedad);
        propiedadesAlquilerContainer.innerHTML += propiedadHTML;
    }

    const verMasVentaButton = document.getElementById('verMasVentaButton');
    verMasVentaButton.addEventListener('click', function () {
        window.location.href = 'propiedades_venta.html';
    });

    const verMasAlquilerButton = document.getElementById('verMasAlquilerButton');
    verMasAlquilerButton.addEventListener('click', function () {
        window.location.href = 'propiedades_alquiler.html';
    });
});


//construir el HTML de una propiedad
function construirHTMLPropiedad(propiedad) {
    return `
    <div class="col-md-4 mb-4">
        <div class="propiedad card">
            <img src="${propiedad.src}" class="card-img-top" alt="${propiedad.nombre}">
            <div class="card-body">
                <h5 class="card-title">${propiedad.nombre}</h5>
                <p class="card-text">${propiedad.descripcion}</p>                
                <p>
                    <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
                </p>
                <p>
                    <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
                    <i class="fas fa-bath"></i> ${propiedad.banos} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                
                ${propiedad.smoke ? 
                    `<p class="text-success"><i class="fas fa-smoking"></i> Se permite fumar</p>` : 
                    `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`}
                ${propiedad.pets ? 
                    `<p class="text-success"><i class="fas fa-paw"></i> Se permiten mascotas</p>` : 
                    `<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>`}
            
                </div>
        </div>
    `;
}