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
            <strong>{task.nombre}</strong>: {task.descripcion} ({task.fecha})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tarea;