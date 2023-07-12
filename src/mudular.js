


const laURLdeToDoList = "http://localhost:3000/api/task/";

/////GET

export async function ObtenerTareas() {
    let promesaTareas = fetch(laURLdeToDoList);
    let resultadoPromesa = await promesaTareas;
    let datosTarea = await resultadoPromesa.json();
    return datosTarea;
}


// POST TAREAS (Guardar tareas)


export async function postTarea(tareaParametro) {
    let promesaTarea = fetch(laURLdeToDoList, {
        method: "POST",
        body: JSON.stringify(
            {
                "task": tareaParametro,
                "check": "false"
            }
        ),
        headers: {
            "Content-Type": "application/json"
        }
    });

    let resultado = await promesaTarea;

    if (resultado.status === 200 && resultado.ok === true) {

        let datosInsertados = await resultado.json();
        return datosInsertados;

    } else {
        console.log("No se logró insertar");
    }

}



export async function marcarTarea(checkParametro , idTareaParametro) {
    let promesaTarea = fetch(laURLdeToDoList + idTareaParametro ,{
        method: "PUT",
        body: JSON.stringify(
            {

                "check": checkParametro
            }
        ),
        headers: {
            "Content-Type": "application/json"
        }
    });

    let resultado = await promesaTarea;

    if (resultado.status === 200 && resultado.ok === true) {

        let datosActualizados = await resultado.json();
        return datosActualizados;

    } else {
        console.log("No se logró actualizar");
    }




}



















export function agregarTareaCookie(tarea) {

    listaTareasGlobal.push(tarea);  //agrega la tarea


    let listaTareaGlobalCadeCadenaTexto = JSON.stringify(listaTareasGlobal);
    document.cookie = "listaTareas" + listaTareaGlobalCadeCadenaTexto;

}



export function eliminarTareaCookie(tarea) {

    // 1 buscar la tarea en la lista

    let indiceTarea = listaTareasGlobal.findIndex(algunaTarea => algunaTarea.toUpperCase() == tarea.toUpperCase()); {


        if (indiceTarea >= 0) {


            listaTareasGlobal.splice(indiceTarea, 1); //elimina la tarea


            let listaTareaGlobalCadeCadenaTexto = JSON.stringify(listaTareasGlobal);
            document.cookie = "listaTareas" + listaTareaGlobalCadeCadenaTexto;
        }
    }
}



export function deleteTask(taskItem) {
    const checkbox = taskItem.querySelector('.checkbox');
    const isChecked = checkbox.checked;

    taskItem.remove();

    if (isChecked) {
        contadorTareasRealizadas--;
        document.getElementById("contador").textContent = contadorTareasRealizadas;
    }

    contadorTotalTareas--;
    document.getElementById("contadorTotal").textContent = contadorTotalTareas;

    updateNoTasksMessage();
}