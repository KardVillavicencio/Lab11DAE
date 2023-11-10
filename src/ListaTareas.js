import React from 'react';
import Tarea from './Tarea';

function ListaTareas({ tareas, eliminarTarea, editarTarea, toggleCompletada, ordenAscendente }) {
  const tareasOrdenadas = tareas.slice().sort((a, b) => {
    const fechaA = a.fechaCreacion;
    const fechaB = b.fechaCreacion;
    return ordenAscendente ? fechaA - fechaB : fechaB - fechaA;
  });

  return (
    <ul className="list-group mt-3">
      {tareasOrdenadas.map((tarea, index) => (
        <Tarea
          key={index}
          tarea={tarea.texto}
          completada={tarea.completada}
          onDelete={() => eliminarTarea(index)}
          onEdit={(nuevoTexto) => editarTarea(index, nuevoTexto)}
          onToggleCompletada={() => toggleCompletada(index)}
        />
      ))}
    </ul>
  );
}

export default ListaTareas;
