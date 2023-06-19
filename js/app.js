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

// alerts
alert('Bienvenidos a la tienda de videojuegos virtual :)')

//Funciones
function catalogoCompleto(array){
        for(let juego of array){
            console.log(`Titulo: ${juego.titulo} y su precio es de ${juego.precio}USD`)
        }
}

function filtrarJuegos ( a ){
    let mayorDeEdad = a

    if(mayorDeEdad){
        catalogoCompleto(listaJuegos)
    } else {
        catalogoCompleto(filtroMenor)
    }
}
/*hace que el usario coloque una opcion correcta sea 1 o 2.*/
do{
        switch(validacion){
        case "1":
            console.log('Eres mayor de edad, puedes comprar videojuegos de cualquier categoria')
            cerrarMenu = true
            filtrarJuegos(true)
            break
        case "2":
            console.log('Eres menor de edad, te mostraremos los videojuegos disponibles para ti')
            cerrarMenu = true
            filtrarJuegos(false)
            break
        default:
            console.log('Ingrese una opcion correcta mostradas en el menu')
            validacion = prompt(`¿Eres mayor de edad? 
            1: Si
            2: No`)
            break
        }
} while (cerrarMenu != true)
