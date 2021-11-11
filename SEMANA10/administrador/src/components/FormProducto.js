import { useRef } from "react";

export default function FormProducto({
  value,
  actualizarInput,
  manejarSubmit,
  manejarImagen,
}) {
  const inputFile = useRef(); //es una referencia de react hacia un elemento como si fuera un ID

  return (
    <div>
      <form
        onSubmit={(e) => {
          manejarSubmit(e);
        }}
      >
        <div className="mb-3">
          <label className="form-label">Nombre producto</label>
          <input
            type="text"
            className="form-control"
            name="nombre"
            value={value.nombre}
            onChange={(e) => {
              actualizarInput(e);
            }}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Descripción producto</label>
          <input
            type="text"
            className="form-control"
            name="descripcion"
            value={value.descripcion}
            onChange={(e) => {
              actualizarInput(e);
            }}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Precio producto</label>
          <input
            type="number"
            className="form-control"
            name="precio"
            value={value.precio}
            onChange={(e) => {
              actualizarInput(e);
            }}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Imagen</label>
          <input
            type="file"
            className="form-control"
            ref={inputFile}
            onChange={(e) => {
              manejarImagen(e);
            }}
          />
        </div>

        <button className="btn btn-primary" type="submit">
          Guardar
        </button>
      </form>
    </div>
  );
}
