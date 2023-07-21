

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


// import { mensaje, decirHola, Persona, obtenerPokemon } from "./llamdaServidor.js";
// console.log("Mi mensaje", mensaje);

// decirHola("Profe");


// //promesa
// // var miPersona = new Persona();
// // console.log(miPersona.nombre);

// // var miRespuesta = obtenerPokemon("pikachu");

// // miRespuesta.then(
// //   (response)=> {
// //     console.log("Response", response);
// //     return response.json();
// //   }
// // ).then(
// //   (data)=>{
// //     console.log(data);
// //   }
// // )

// // //segunda forma asyncronimo => sincronimo

// // var miResultado = await obtenerPokemon("gengar");
// // var datosGengar = await miResultado.json();
// // console.log("Esperando a Gengar; ", datosGengar);



// // import { getPokemon } from './llamdaServidor.js';

// // var pokemon = await getPokemon("199");
// // console.log("Mi pokemon es: ", pokemon);


// var miPokemon = await obtenerPokemon("4")
// console.log("mi pokemon es ", miPokemon);


// Marcar tarea como completada o incompleta
function marcarTarea(checkbox) {
    const taskLabel = checkbox.nextElementSibling;
  
    if (checkbox.checked) {
      taskLabel.classList.add("completed");
      contadorTareasRealizadas++;
    } else {
      taskLabel.classList.remove("completed");
      contadorTareasRealizadas--;
    }
  
    document.getElementById("contador").textContent = contadorTareasRealizadas;
  }

