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
                "check": false
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


//marcar tarea put

export async function marcarTarea(checkParametro, idTareaParametro) {
    let promesaTarea = fetch(laURLdeToDoList + idTareaParametro, {
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



/////// DELETE TAREAS//////////////


export async function borrarTarea1(idTareaAEliminar) {
    let promesaBorrar = fetch(laURLdeToDoList + idTareaAEliminar, {
        method: "DELETE"
    });
    let resultado = await promesaBorrar;

    if (resultado.status === 200 && resultado.ok === true) {
        let datos = await resultado.json()
        return datos;
    } else {
        console.log("Algo paso mal")
    }
}









