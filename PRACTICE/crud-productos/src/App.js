import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { obtenerProductos } from "./service/productosService";
import { Button } from "reactstrap";
import axios from "axios";

export default function App() {
  const [productos, setProductos] = useState([]);

  const getProductos = async () => {
    try {
      const productosObtenidos = await obtenerProductos();
      // console.table(productosObtenidos);
      setProductos(productosObtenidos); //después que obtenemos los datos, actualizamos el estado
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductos();
  }, []);

  return (
    <>
      <div className="container">
        <br />
        <h1 className="display-2">Listado de Productos</h1>
        <br />
        <button type="button" className="btn btn-primary">
          Crear Producto
        </button>
        <br />
        <br />
        <div className="table-responsive-sm">
          <table className="table table-hover border border-dark border-2 align-middle">
            <thead className="table-dark align-middle">
              <tr>
                <th>COD. Prod.</th>
                <th>Producto</th>
                <th>Descripcion</th>
                <th>Precio</th>
                <th>Imagen</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {productos.map(
                ({ nombre, descripcion, precio, imagen, id }, i) => (
                  <tr key={i}>
                    <td>{id}</td>
                    <td>{nombre}</td>
                    <td>{descripcion}</td>
                    <td>{precio}</td>
                    <td>
                      <img src={imagen} className="img-fluid" alt={id} />
                    </td>
                    <td>
                      <div className="form-group row justify-content-center">
                        <button className="btn btn-dark">Editar</button>
                        <button className="btn btn-danger">Eliminar</button>
                      </div>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
