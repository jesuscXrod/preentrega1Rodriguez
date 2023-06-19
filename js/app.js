// Variables
let carrito = []
let validacion = prompt(`¿Eres mayor de edad? 
    1: Si
    2: No`)
let cerrarMenu = false
const listaJuegos = []

//Constructor
class Juego{
    constructor(categoria,id,precio,titulo){
        this.categoria = categoria,
        this.id = id,
        this.precio = precio,
        this.titulo = titulo
    }
}

const juego1 = new Juego(1, 1, 15,"Assassins Creed: Valhalla")
const juego2 = new Juego(2, 2, 25,"The Legend of Zelda: Tears of the Kingdom")
const juego3 = new Juego(1, 3, 50,"Diablo IV")
const juego4 = new Juego(2, 4, 15,"The Sims 4")

listaJuegos.push(juego1, juego2, juego3, juego4)

let filtroMenor = listaJuegos.filter(
    (juego) => {return juego.categoria === 2}
)

//Funciones
function catalogoCompleto(array){
    for(let juego of array){
        console.log(`Titulo: ${juego.titulo} y su precio es de ${juego.precio}USD y su ID en la tienda es: ${juego.id}`)
    }
}

//filtro segun edad
function filtrarJuegos ( a ){
    let mayorDeEdad = a

    if(mayorDeEdad){
        catalogoCompleto(listaJuegos)
    } else {
        catalogoCompleto(filtroMenor)
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

/*hace que el usario coloque una opcion correcta sea 1 o 2.*/
do{
        switch(validacion){
        case "1":
            console.log('Eres mayor de edad, puedes comprar videojuegos de cualquier categoria')
            cerrarMenu = true
            menuTienda(true)
            break
        case "2":
            console.log('Eres menor de edad, te mostraremos los videojuegos disponibles para ti')
            cerrarMenu = true
            menuTienda(false)
            break
        default:
            console.log('Ingrese una opcion correcta mostrada en el menu')
            validacion = prompt(`¿Eres mayor de edad? 
            1: Si
            2: No`)
            break
        }
} while (cerrarMenu != true)

function menuTienda(edad){
    let cerrarMenu2 = false
    
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
            filtrarJuegos(edad)
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
}