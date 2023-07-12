

export const mensaje = "hola mundo soy un modulo";


export function decirHola(nombre) {
    console.log("Bienvenido " + nombre);
}

export class Persona {
    nombre = "Pepe";
}







//=============================================================}



// const laURLdePokemon = "https://pokeapi.co/api/v2/"

// export async function obtenerPokemon(pokemon) {

//     return fetch(laURLdePokemon + "pokemon/" + pokemon);


// }





//=================================================================>




// const URLdePokemon = "https://pokeapi.co/api/v2/";

// export async function getPokemon(namePokemonParam) {
//     var miPromesa = fetch(laURLdePokemon + "pokemon/" + namePokemonParam);
//     let resultado = await miPromesa; // solo puedo usar await en funciones asincrónomas, por ende, se le indica async a la funcion
//     let data = await resultado.json();
//     return (data);
// }

/*
const URLservidorDePokemon = "https://pokeapi.co/api/v2/";

export async function obtenerPokemon(PokemonParam) {
    let promesaServidor = fetch(URLservidorDePokemon + "pokemon/" + PokemonParam);
    let respuestaServidor = await promesaServidor;
    let datosPokemon = await respuestaServidor.json();
    return datosPokemon;
}

*/


