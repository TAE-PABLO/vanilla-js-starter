import { ObtenerTareas, postTarea, marcarTarea, borrarTarea1} from "./mudular.js";

// Crear tareas iniciales // GET
var listaTareasGlobal = [];

async function crearTareasIniciales() {
  listaTareasGlobal = await ObtenerTareas();
  console.log("Mi lista al iniciar la aplicación: ", listaTareasGlobal);

  for (let indiceTarea = 0; indiceTarea < listaTareasGlobal.length; indiceTarea++) {
    const tarea = listaTareasGlobal[indiceTarea];
    const textoTarea = tarea.task;
    agregarTarea(textoTarea , tarea.id, tarea.check);
    // postTarea(textoTarea);
  }
}







// Variables

let contadorTareasRealizadas = 0;
let contadorTotalTareas = 0;

// Elementos del DOM

const taskInput = document.getElementById("tarea");
const addButton = document.getElementById("subir");
const taskList = document.getElementById("taskList");
const noTasksMessage = document.getElementById("noTasksMessage");

// Agregar evento click al botón
addButton.addEventListener("click", agregarTareaEvento);
taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    agregarTareaEvento();
  }
});

/*
// Agregar evento click al contenedor de la lista de tareas
taskList.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete")) {

    console.log("ENTRE A el evento de eliminar TAREA SOY EL ID",idTarea);
    console.log("estoy aquiiiiiiiiiiiiiii")
    eliminarTarea(event.target.parentElement);
  } else if (event.target.classList.contains("checkbox")) {
    marcarTarea(event.target);
  }
});
*/

async function agregarTareaEvento() {

  const textoTarea = taskInput.value.trim();
  if (textoTarea !== "") {
    const tareasExistentes = Array.from(taskList.getElementsByTagName("label"));
    const esTareaDuplicada = tareasExistentes.some(tarea => tarea.textContent.toLowerCase() === textoTarea.toLowerCase());
    if (esTareaDuplicada) {
      alert("Tarea existente");
      return;
    }
    var respuestaAgregar = await postTarea(textoTarea);
    listaTareasGlobal = [...respuestaAgregar];
    var ultimaTarea = respuestaAgregar.pop();

    const idTarea = ultimaTarea.id
    const checkTarea = ultimaTarea.check

    console.log("SOY UN IDDDDDDDD",idTarea)

    agregarTarea(textoTarea, idTarea, checkTarea);



  }else {
    alert("No hay texto. Agrega una tarea para continuar.");
    return;
  }

}



// Agregar tarea a la lista
function agregarTarea(textoTarea, idTarea, checkTarea) {
  if(checkTarea == true){
    contadorTareasRealizadas++;
    document.getElementById("contador").textContent = contadorTareasRealizadas;
  }

  console.log("ENTRE A AGREGAR TAREA SOY EL ID",idTarea);

  // ObtenerTareas(textoTarea);
  if (textoTarea !== "") {

    const listItem = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");
    checkbox.id = idTarea;
    checkbox.checked = checkTarea;
checkbox.addEventListener("change" , (evento)=>{
  var miCheck = evento.target;
  marcarTarea(miCheck.checked, miCheck.id)
  if(miCheck.checked){
    contadorTareasRealizadas++;
    document.getElementById("contador").textContent = contadorTareasRealizadas;

  }else{
    contadorTareasRealizadas--;
    document.getElementById("contador").textContent = contadorTareasRealizadas;
  }
})
    const taskLabel = document.createElement("label");
    taskLabel.textContent = textoTarea;

    const deleteButton = document.createElement("span");
    deleteButton.textContent = " || 🗑️";

    deleteButton.classList.add("delete")
    
  deleteButton.addEventListener("click" , (evento)=>{
    eliminarTarea(evento,idTarea);

  } )


  

    listItem.appendChild(checkbox);
    listItem.appendChild(taskLabel);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    taskInput.value = "";
    taskInput.focus();

    noTasksMessage.style.display = "none";

    contadorTotalTareas++;
    document.getElementById("contadorTotal").textContent = contadorTotalTareas;
  } 

  // taskList.addEventListener("click", function (event) {
  //    if (event.target.classList.contains("checkbox")) {
  //     console.log("este es el id del check")
      
  //   }
 // });

  actualizarMensajeSinTareas();
}

// Eliminar tarea de la lista
function eliminarTarea(taskItem, idTarea) {
  const checkbox = taskItem.target.parentElement.querySelector('.checkbox');
  const isChecked = checkbox.checked;
  borrarTarea1(idTarea)


  taskItem.target.parentElement.remove(idTarea);

  if (isChecked) {
    contadorTareasRealizadas--;
    document.getElementById("contador").textContent = contadorTareasRealizadas;
  }

  contadorTotalTareas--;
  document.getElementById("contadorTotal").textContent = contadorTotalTareas;

  actualizarMensajeSinTareas();
}




// Actualizar mensaje si no hay tareas en la lista
function actualizarMensajeSinTareas() {
  if (taskList.children.length === 0) {
    noTasksMessage.style.display = "block";
  } else {
    noTasksMessage.style.display = "none";
  }
}





// Actualizar contadores
document.getElementById("contador").textContent = contadorTareasRealizadas;
document.getElementById("contadorTotal").textContent = contadorTotalTareas;
// Crear tareas iniciales al cargar la página

crearTareasIniciales();
