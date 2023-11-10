import React, { useState } from 'react';

function TareaForm({ agregarTarea }) {
  const [texto, setTexto] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar que el texto no esté en blanco y no sea demasiado largo
    if (texto.trim() === "") {
      setError("Por favor, ingresa el texto de la tarea.");
      return;
    }

    if (texto.length > 50) {
      setError("El texto de la tarea es demasiado largo. Por favor, reduce la longitud.");
      return;
    }

    // Limpiar el mensaje de error si la validación es exitosa
    setError("");

    agregarTarea(texto);
    setTexto("");
  };

  return (
    <form className="mt-3">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Añadir tarea..."
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        <div className="input-group-append">
          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
            Agregar Tarea
          </button>
        </div>
      </div>

      {/* Mostrar el mensaje de error si existe */}
      {error && <p className="text-danger mt-2">{error}</p>}
    </form>
  );
}

export default TareaForm;
