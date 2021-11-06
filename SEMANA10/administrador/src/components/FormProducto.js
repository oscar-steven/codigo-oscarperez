export default function FormProducto({
  value,
  actualizarInput,
  manejarSubmit,
}) {
  console.log(value);
  return (
    <div>
      <form
        onSubmit={(e) => {
          manejarSubmit(e);
        }}
      >
        <div className="mb-3">
          <label className="form-label">Nombre Producto</label>
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
          <label className="form-label">Descripcion Producto</label>
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
          <label className="form-label">NomPrecio Producto</label>
          <input
            type="text"
            className="form-control"
            name="precio"
            value={value.precio}
            onChange={(e) => {
              actualizarInput(e);
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
