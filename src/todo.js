

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


















//======================================================================>




function obtenerCookie() {

  let galleta = document.cookie;

  let galletaDividida = galleta.split("=");

  alert(galletaDividida[1]);
}








document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("tarea");
  const addButton = document.getElementById("subir");
  const taskList = document.getElementById("taskList");
  const noTasksMessage = document.getElementById("noTasksMessage");

  // funcion de contador

  let contadorTareasRealizadas = 0;
  let contadorTotalTareas = 0;

  // para agregar los botones

  addButton.addEventListener("click", addTask);
  taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

  // esto es para ver si ya esta echa o la eliminaron

  taskList.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete")) {
      deleteTask(event.target.parentElement);
    } else if (event.target.classList.contains("checkbox")) {
      completeTask(event.target);
    }
  });


  // funcion para la lista de tareas



  function addTask() {
    const taskText = taskInput.value.trim();
    console.log(taskText)
    postTarea(taskText);

    // verificadores de tareas repitidas con mayusculas o sin ellas

    if (taskText !== "") {
      const existingTasks = Array.from(taskList.getElementsByTagName("label"));
      const isTaskDuplicate = existingTasks.some(task => task.textContent.toLowerCase() === taskText.toLowerCase());

      if (isTaskDuplicate) {
        alert("Tarea existente");
        return;
      }

      // creador de la lista

      const listItem = document.createElement("li");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.classList.add("checkbox");

      const taskLabel = document.createElement("label");
      taskLabel.textContent = taskText;

      // boton borrar

      const deleteButton = document.createElement("span");
      deleteButton.textContent = " || 🗑️";
      deleteButton.classList.add("delete");

      // selecion de boton/// aqui el codigo lee si selecciona de las opciones, borrar, el check etc

      listItem.appendChild(checkbox);
      listItem.appendChild(taskLabel);
      listItem.appendChild(deleteButton);
      taskList.appendChild(listItem);

      taskInput.value = "";
      taskInput.focus();

      noTasksMessage.style.display = "none";

      contadorTotalTareas++;
      document.getElementById("contadorTotal").textContent = contadorTotalTareas;
    } else {
      alert("No hay texto. Agrega una tarea para continuar.");
      return;
    }

    updateNoTasksMessage();
  }

  // eliminar las tareas



  // marcar si esta completa o incompleta



  function completeTask(checkbox) {
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

  // tareas completas o incompleta

  function updateNoTasksMessage() {
    if (taskList.children.length === 0) {
      noTasksMessage.style.display = "block";
    } else {
      noTasksMessage.style.display = "none";
    }
  }

  // actualizador de mensajes

  document.getElementById("contador").textContent = contadorTareasRealizadas;
  document.getElementById("contadorTotal").textContent = contadorTotalTareas;
});


import { agregarTareaCookie, eliminarTareaCookie, deleteTask, ObtenerTareas, postTarea, marcarTarea } from "./mudular.js";

var postTareasResultado = await postTarea("Sacar al perro");

console.log(" POST RESULTADO =", postTareasResultado);

var resultadoMarcarTarea = await marcarTarea(true, "eaf502ea-b06d-4b60-a07e-5eacb2513a4f");
