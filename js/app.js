// Variables
let carrito = [];
const listaJuegos = [];

const validacionMayor = document.getElementById("btnMayorEdad");
const validacionMenor = document.getElementById("btnMenorEdad");
const catalogo = document.getElementById("catalogo");
const carritoContainer = document.getElementById("carrito-container");
const testeandoOcultar = document.getElementById("testeandoHide");

// Constructor
class Juego {
    constructor(categoria, id, precio, titulo, imagen) {
        this.categoria = categoria;
        this.id = id;
        this.precio = precio;
        this.titulo = titulo;
        this.imagen = imagen;
    }
}

const juego1 = new Juego(1, 1, 15, "Assassins Creed: Valhalla", "assassins-creed-valhalla.png");
const juego2 = new Juego(2, 2, 25, "The Legend of Zelda: Tears of the Kingdom", "zelda.jpg");
const juego3 = new Juego(1, 3, 50, "Diablo IV", "diablo-4.png");
const juego4 = new Juego(2, 4, 15, "The Sims 4", "sims4.webp");

listaJuegos.push(juego1, juego2, juego3, juego4);

const filtroMenor = listaJuegos.filter((juego) => juego.categoria === 2);

// Funciones

// Actualiza el catálogo completo en la página
function catalogoCompleto(array) {
    catalogo.innerHTML = ""; // Limpiamos el catálogo antes de actualizarlo

    array.forEach((juego) => {
        const divCarrito = document.createElement("div");
        divCarrito.className = "col-12 my-2";
        divCarrito.innerHTML = `<div id="${juego.id}" class="row">
                                <div class="col-3">
                                    <img class="img-juego" style="height: 200px;" src="img/${juego.imagen}" alt="${juego.titulo}">
                                </div>
                                <div class="col-9">
                                    <h2>${juego.titulo}</h2>
                                    <p class="${juego.precio}">Precio: ${juego.precio} USD</p>
                                    <button id="agregarBtn${juego.id}" class="btn-comprar">Agregar al carrito</button>
                                </div>
                            </div>`;
        catalogo.appendChild(divCarrito);

        const agregarBtn = document.getElementById(`agregarBtn${juego.id}`);
        agregarBtn.addEventListener("click", () => agregarJuego(juego));
    });
}

// Agrega un juego al carrito según la validación de edad
function agregarJuego(juego) {
    if (carrito.some((juegoCarrito) => juegoCarrito.id === juego.id)) {
        console.log("Este juego ya está en el carrito.");
        return;
    }

    carrito.push(juego);
    localStorage.setItem("carrito", JSON.stringify(carrito)); // Almacenar el carrito en localStorage
    actualizarCarritoHTML();
}

// Elimina un juego del carrito
function eliminarJuego(juegoID) {
    const juegoIndex = carrito.findIndex((juego) => juego.id === juegoID);

    if (juegoIndex === -1) {
        console.log("No se encontró ningún juego con ese ID en el carrito.");
        return;
    }

    carrito.splice(juegoIndex, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito)); // Actualizar el carrito en localStorage
    actualizarCarritoHTML();
}

// Filtra los juegos según la edad y actualiza el catálogo
function filtrarJuegos(mayorDeEdad) {
    const juegosFiltrados = mayorDeEdad ? listaJuegos : filtroMenor;
    catalogoCompleto(juegosFiltrados);
}

// Muestra el menú de la tienda según la validación de edad
function menuTienda(edad) {
    filtrarJuegos(edad);
    carritoContainer.style.display = "block"; // Mostrar el carrito
    testeandoHide.style.display = "block"; // Mostrar el elemento testeandoHide
}

// Cargar el carrito almacenado en localStorage
const carritoStorage = localStorage.getItem("carrito");
if (carritoStorage) {
    carrito = JSON.parse(carritoStorage);
}

// Actualiza el carrito en el HTML
function actualizarCarritoHTML() {
    carritoContainer.innerHTML = ""; // Limpiamos el carrito antes de actualizarlo

    if (carrito.length === 0) {
        carritoContainer.innerHTML = "<p>No tienes ningún juego en el carrito de compras.</p>";
    } else {
        carrito.forEach((juego) => {
            const divCarrito = document.createElement("div");
            divCarrito.innerHTML = `<div id="${juego.id}" class="row">
                                <div class="col-3">
                                    <img class="img-juego" style="height: 100px;" src="img/${juego.imagen}" alt="${juego.titulo}">
                                </div>
                                <div class="col-6">
                                    <h4>${juego.titulo}</h4>
                                    <p class="${juego.precio}">Precio: ${juego.precio} USD</p>
                                </div>
                                <div class="col-3">
                                    <button class="btn-eliminar" id="eliminarBtn${juego.id}">Eliminar</button>
                                </div>
                            </div>`;
            carritoContainer.appendChild(divCarrito);

            const eliminarBtn = document.getElementById(`eliminarBtn${juego.id}`);
            eliminarBtn.addEventListener("click", () => eliminarJuego(juego.id));
        });
    }
}

// Listeners
validacionMayor.addEventListener("click", () => {
    document.getElementById("container-edad").hidden = true;
    menuTienda(true);
    localStorage.setItem("mayorDeEdad", true);
});

validacionMenor.addEventListener("click", () => {
    document.getElementById("container-edad").hidden = true;
    menuTienda(false);
    localStorage.setItem("mayorDeEdad", false);
});

const fullCatalogo = localStorage.getItem("mayorDeEdad");

if (fullCatalogo === "true") {
    document.getElementById("container-edad").hidden = true;
    menuTienda(true);
} else if (fullCatalogo === "false") {
    document.getElementById("container-edad").hidden = true;
    menuTienda(false);
} else {
    document.getElementById("container-edad").hidden = false;
    carritoContainer.style.display = "none"; // Ocultar el carrito
}

// Mostrar el carrito almacenado en el localStorage al cargar la página
window.addEventListener("DOMContentLoaded", () => {
    actualizarCarritoHTML();
});