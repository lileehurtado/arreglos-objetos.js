import { propiedades_alquiler } from './propiedades.js';

document.addEventListener('DOMContentLoaded', function() {
    const propiedadesAlquilerContainer = document.getElementById('propiedadesAlquilerContainer');

    propiedades_alquiler.forEach(propiedad => {
        const propiedadHTML = `
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

        //  propiedad al contenedor
        propiedadesAlquilerContainer.innerHTML += propiedadHTML;
    });
});