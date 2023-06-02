//Mensaje de bienvenida (No estará cuando se cree el HTML y CSS)
alert('Bienvenidos a la tienda de videojuegos virtual :)')

//Prompt para pedir validacion de si es mayor de edad o no.
let validacion = prompt(`¿Eres mayor de edad? 
    1: Si
    2: No`)

let cerrarMenu = false

//Intenté crear un "filtro" para darle un poquito mas de vida, sé que hay mejores formas de crear filtros con JS que aún no vimos
function filtrarJuegos ( a ){
    let mayorDeEdad = a

    //Muestra todos los juegos
    if(mayorDeEdad){
        console.info(`Juego: Assassins Creed: Valhalla
        Precio: 10USD
        Categoria: A

        Juego: The Legend of Zelda: Tears of the Kingdom
        Precio: 10USD
        Categoria: E`)
    } else {
        //solo muestra los que no sean Categoria A: Adult por ser menor de edad
        console.info(`Juego: The Legend of Zelda: Tears of the Kingdom
        Precio: 10USD
        Categoria: E`)
    }
}

/*Un ciclo do...while para hacer que el usario coloque una opcion correcta sea 1 o 2.*/
do{
    /*Lo que se mostrará si el usuario es mayor de edad o no
    En caso de no colocar una opción correcta, se volverá a preguntar si es mayor de edad o no*/
    switch(validacion){
        case "1":
            console.log('Eres mayor de edad, puedes comprar videojuegos de cualquier categoria')
            cerrarMenu = true
            filtrarJuegos(true)
            break
        case "2":
            console.log('Eres menor de edad, puedes comprar videojuegos T o menor')
            cerrarMenu = true
            filtrarJuegos(false)
            break
        default:
            console.log('Inserte una opcion correcta mostradas en el menu')
            validacion = prompt(`¿Eres mayor de edad? 
            1: Si
            2: No`)
            break
        }
} while (cerrarMenu != true)
