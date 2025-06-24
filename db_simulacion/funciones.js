
// Obtener un objeto de tipo Map almacenado en localStorage
function obtenerMap(nombre) {
    const str = localStorage.getItem(nombre);
    if (!str) {
        console.warn(`No se encontró el objeto con el nombre: ${nombre}`);
        return new Map(); // En lugar de lanzar error, devuelve un mapa vacío
    }
    const json = JSON.parse(str);
    return new Map(Object.entries(json));
}


// Devolver la lista de categorias almacenadas 
function  obtenerCategorias() {
    const map = obtenerMap("categorias");
    return map.values();
}

// Obtener lista de banners almacenados en el localstorage

function obtenerBanners() {
    const map = obtenerMap("banners");
    return map.values();
}


// Devolver listado de celulares por sus categorias

function obtenerCelulares(categoria= "todos") {
    const map = obtenerMap("celulares");
    let productos = [];

    if (categoria === null || categoria === "todos") {
        productos = map.values();
    }else {
        productos = map.values().filter(celular => celular.categoria === categoria);
    }

    return productos;
}
// Funciones para la manipulacion del carrito de compras
// Obtener el carrito de compras almacenado en sessionStorage
function obtenerCarrito() {
    const str = sessionStorage.getItem('carrito');
    const carrito = str ? JSON.parse(str) : [];
    return carrito;
}

// Mostrar los productos añadidos al carrito de compras

function mostrarCarrito() {
    const carrito = obtenerCarrito(); // Suponiendo que esta función retorna un array
    const carritoContainer = document.getElementById('carrito');
    carritoContainer.innerHTML = ''; // Limpiar contenido anterior

    let precio = 0;

    carrito.forEach((celular, posicion) => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between mb-2';

        li.innerHTML = `
            <div class="d-flex justify-content-between align-items-center w-100">
                <div>
                    <h6 class="my-1">${celular.nombre}</h6>
                    <small>$${celular.precio.toLocaleString('es-CO')}</small>
                </div>
                <a class="btn btn-danger text-decoration-none text-white" href="#" onclick="eliminarCelular(${posicion})">
                    <i class="fas fa-times"></i>
                </a>
            </div>
        `;

        carritoContainer.appendChild(li);
        precio += celular.precio;
    });

    const totalElement = document.getElementById('total');
    totalElement.textContent = Math.round(precio).toLocaleString('es-CO');
}

// Agregar un celular al carrito de compras

function agregarCelular(celular, actualizarCarrito = true) {
    let carrito = obtenerCarrito();

    // Verifica si el celular ya está en el carrito
    const yaExiste = carrito.some(item => item.codigo === celular.codigo);
    if (yaExiste) {
        alert("Este producto ya está en el carrito, no se puede agregar dos veces.");
        return; // No lo agrega de nuevo
    }

    carrito.push(celular);
    sessionStorage.setItem('carrito', JSON.stringify(carrito));
    sessionStorage.setItem('contadorCarrito', carrito.length); // Corregido 'lenght' por 'length'

    if (actualizarCarrito === true) {
        mostrarCarrito();
    }
}


// Eliminar un celular del carrito

function eliminarCelular(index){
    let carrito = obtenerCarrito ();
    carrito.splice(index, 1);
    sessionStorage.setItem('carrito', JSON.stringify(carrito));
    sessionStorage.setItem('contadorCarrito', carrito.lenght);

    mostrarCarrito();

}

// Vaciar carrito

function vaciarCarrito() {
    let carrito = []; // Simplemente un carrito vacío
    sessionStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
}

function obtenerCelularPorCodigo(celularProducto) {
    const celulares = obtenerCelulares(); // Asumimos que devuelve un array de objetos

    // Busca el celular cuyo código coincida
    const respuesta = celulares.find(cel => cel.codigo == celularProducto);

    if (!respuesta) {
        throw new Error(`No se encontró el celular con el código: ${celularProducto}`);
        
    }

    return respuesta;
}
