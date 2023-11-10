import React, { useState } from 'react';

function Tarea({ tarea, onDelete, onEdit, completada, onToggleCompletada }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(tarea);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onEdit(editedText);
    setIsEditing(false);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <input type="checkbox" checked={completada} onChange={onToggleCompletada} />
        {isEditing ? (
          <>
            <input
              type="text"
              className="form-control"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
            />
            <button className="btn btn-success" onClick={handleSaveClick}>
              Guardar
            </button>
          </>
        ) : (
          <>
            {tarea}
            <button className="btn btn-danger ml-2" onClick={onDelete}>
              Eliminar
            </button>
            <button className="btn btn-primary ml-2" onClick={handleEditClick}>
              Editar
            </button>
          </>
        )}
      </div>
    </li>
  );
}

export default Tarea;
