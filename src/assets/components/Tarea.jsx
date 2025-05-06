import React, { useState, useEffect } from "react";

function Tarea() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      nombre: "Iniciar Proyecto",
      descripcion: "Crear repositorio en Github y subir los cambios",
      fecha: "14-06-25",
    },
  ]);

  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [fecha, setFecha] = useState("");

  useEffect(() => {
    console.log("Tareas actuales:", tasks);
  }, [tasks]);

  // Función para formatear fecha a día-mes-año
  const formatearFecha = (fechaInput) => {
    const partes = fechaInput.split("-"); // formato yyyy-mm-dd
    const anio = partes[0];
    const mes = partes[1];
    const dia = partes[2];
    return `${dia}-${mes}-${anio}`;
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!nombre || !descripcion || !fecha) return;

    const newTask = {
      id: tasks.length + 1,
      nombre,
      descripcion,
      fecha: formatearFecha(fecha), // usar fecha formateada
    };

    setTasks([...tasks, newTask]);
    alert(" Tarea agregada:   "+ nombre + "  -  Descripción:  " + descripcion);
    setNombre("");
    setDescripcion("");
    setFecha("");
  };

  // Marcar como completada o no
  const toggleTareaCompletada = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completada: !task.completada } : task
      )
    );
  };

  // Eliminar tarea
  const eliminarTarea = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };


  return (
    <div className="container">
      <h2 className="titulo">Lista de Tareas</h2>
      <form onSubmit={handleAddTask} className="formulario">
        <input className="input"
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input className="input"
          type="text"
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <input className="input"
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
        <button type="submit" className="boton">Agregar Tarea</button>
      </form>
      
      <ul className="lista">
        {tasks.map((task) => (
          <li key={task.id}>
            <span className={task.completada ? "completada" : ""}>
              <strong>{task.nombre}</strong>: {task.descripcion} ({task.fecha})
            </span>
            {/* Mostrar botones solo si no es la tarea con id 1 */}
            {task.id !== 1 && (
              <div className="botones-tarea">
                <button className="boton-completar" onClick={() => toggleTareaCompletada(task.id)}>
                  {task.completada ? "Realizada" : "Realizar"}
                </button>
                <button className="boton-eliminar" onClick={() => eliminarTarea(task.id)}>Eliminar</button>
              </div>
            )}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default Tarea;