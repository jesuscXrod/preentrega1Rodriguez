// Variables
let carrito = []
/*let validacion = prompt(`¿Eres mayor de edad? 
    1: Si
    2: No`)*/
let cerrarMenu = false
const listaJuegos = []
const validacionMayor = document.getElementById("btnMayorEdad")
const validacionMenor = document.getElementById("btnMenorEdad")
const catalogo = document.getElementById("catalago")


//Constructor
class Juego{
    constructor(categoria,id,precio,titulo,imagen){
        this.categoria = categoria,
        this.id = id,
        this.precio = precio,
        this.titulo = titulo,
        this.imagen = imagen
    }
}

const juego1 = new Juego(1, 1, 15,"Assassins Creed: Valhalla", "assassins-creed-valhalla.png")
const juego2 = new Juego(2, 2, 25,"The Legend of Zelda: Tears of the Kingdom", "zelda.jpg")
const juego3 = new Juego(1, 3, 50,"Diablo IV", "diablo-4.png")
const juego4 = new Juego(2, 4, 15,"The Sims 4", "sims4.webp")

listaJuegos.push(juego1, juego2, juego3, juego4)

let filtroMenor = listaJuegos.filter(
    (juego) => {return juego.categoria === 2}
)

//Funciones
function catalogoCompleto(array){
    for(let juego of array){
        let nuevoDiv = document.createElement("div")
        nuevoDiv.className = "col-12 col-md-6 col-lg-4 my-2"
        nuevoDiv.innerHTML = `<div id="${juego.id}" class="card" style="width: 18rem;">
                                    <img class="card-img-top img-fluid" style="height: 200px;"src="img/${juego.imagen}" alt="${juego.titulo}">
                                    <div class="card-body">
                                    <h3 class="card-title">${juego.titulo}</h4>
                                    <p class="${juego.precio <= 2000 && "ofertaLibro"}">Precio: ${juego.precio} USD</p>
                                    <button id="agregarBtn${juego.id}" class="btn btn-outline-success">Agregar al carrito</button>
                                    </div>
                                </div>`
        catalogo.appendChild(nuevoDiv)
    }
}

//Carrito
function verCarrito(){
    if(carrito.length === 0){
        console.log('No tienes ningun juego en el carrito de compras')
    }else if(carrito.length === 1){
        console.log(`Tu carrito de compras tiene: ${carrito.length} juego`)
        catalogoCompleto(carrito)
    }else{
        console.log(`Tu carrito de compras tiene: ${carrito.length} juegos`)
        catalogoCompleto(carrito)
    }
}

//Funcion agregar juego al carrito
function agregarJuego(validacionEdad){
    
    if(validacionEdad){
        carritoFiltrado(listaJuegos)
    }else{
        carritoFiltrado(filtroMenor)
    }
    
    function carritoFiltrado(array){
        let juegoID = parseInt(prompt("Ingrese el ID del juego que quieres agregar al carrito"))
        
        array.forEach(element => {
            if(juegoID === element.id){
                carrito.push(element)
                console.log('Juego agregado correctamente')
            }
        });
    }
}

//Funcion eliminar juego del carrito
function eliminarJuego(array) {
    if (array.length === 0) {
    console.log('El carrito de compras está vacío. No hay juegos para eliminar.');
    return;
    }

    console.log('Juegos en el carrito:');
    catalogoCompleto(array);

    let juegoID = parseInt(prompt('Ingrese el ID del juego que desea eliminar del carrito'));

    let juegoIndex = array.findIndex((juego) => juego.id === juegoID);

    if (juegoIndex === -1) {
    console.log('No se encontró ningún juego con ese ID en el carrito.');
    return;
    }

    let juegoEliminado = array.splice(juegoIndex, 1)[0];
    console.log(`Se ha eliminado el juego "${juegoEliminado.titulo}" del carrito.`);
}  


//Listeners
validacionMayor.addEventListener("click", () =>{
    menuTienda(true)
    document.getElementById("container-edad").hidden = true;
})

validacionMenor.addEventListener("click", () =>{
    menuTienda(false)
    document.getElementById("container-edad").hidden = true;
})

//filtro segun edad
function filtrarJuegos ( a ){
    let mayorDeEdad = a

    if(mayorDeEdad){
        catalogoCompleto(listaJuegos)

    } else {
        catalogoCompleto(filtroMenor)
    }
}



function menuTienda(edad){
    filtrarJuegos(edad)


}

/* 

do{
    let opcionMenu = prompt(`Bienvenido/a al menu, ingrese una opción para realizar la acción deseada:
        1: Ver catalogo completo
        2: Agregar un juego al carrito
        3: Eliminar un juego del carrito
        4: Ver el carrito
        5: Salir del menu
        `)
        switch(opcionMenu){
        case "1":
            
        break
        case "2":
            agregarJuego(edad)
        break
        case "3":
            eliminarJuego(carrito)
        break
        case "4":
            verCarrito()
        break
        case "5":
            alert('Gracias por entrar en nuestra tienda virtual')
            cerrarMenu2 = true
        break
        default:
            console.log('Por favor ingrese una opcion valida')
        }
    } while (cerrarMenu2 != true)

*/