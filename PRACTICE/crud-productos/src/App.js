import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect, useRef } from "react";
import {
  obtenerProductos,
  obtenerProductoPorId,
  editarProductoPorId,
  eliminarProducto,
  crearProducto,
  subirImagen,
} from "./service/productosService";
import Swal from "sweetalert2";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";

let imagen;

export default function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  ////////////////////////////////////////////////////////////////////
  //OBTENER PRODUCTOS

  const [productos, setProductos] = useState([]);

  const getProductos = async () => {
    try {
      const productosObtenidos = await obtenerProductos();
      setProductos(productosObtenidos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductos();
  }, []);

  ////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////

  ////////////////////////////////////////////////////////////////////
  //ELIMINAR PRODUCTO

  const verificarEliminar = async (id) => {
    const respuesta = await Swal.fire({
      icon: "warning",
      title: "Desea eliminar el producto?",
      text: "Esta acción es irreversible",
      showConfirmButton: true,
      showDenyButton: true,
      confirmButtonText: "Sí, Eliminar",
      denyButtonText: "No, Cancelar",
    });
    if (respuesta.isConfirmed) {
      try {
        await eliminarProducto(id);
        await Swal.fire({
          icon: "success",
          title: "Producto eliminado!",
        });
        getProductos();
      } catch (error) {
        console.log(error);
      }
    }
  };

  ////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////

  ////////////////////////////////////////////////////////////////////
  //CREAR PRODUCTO

  const inputFile = useRef();

  const [value, setValue] = useState({
    nombre: "",
    descripcion: "",
    precio: 0,
  });

  const actualizarInput = (e) => {
    console.log(e.target.name, e.target.value);
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const manejarSubmit = async (e) => {
    e.preventDefault();
    try {
      const urlImagenSubida = await subirImagen(imagen);
      await crearProducto({ ...value, imagen: urlImagenSubida });
      await Swal.fire({
        icon: "success",
        title: "Éxito",
        text: "Producto Creado!",
      });
      setValue([]);
      handleClose();
      getProductos();
    } catch (error) {
      console.log(error);
    }
  };

  const manejarImagen = (e) => {
    e.preventDefault();
    console.log(e.target.files);
    imagen = e.target.files[0];
  };

  ////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////

  ////////////////////////////////////////////////////////////////////
  //EDITAR PRODUCTO

  const { id } = useParams();

  const getProducto = async () => {
    try {
      const prodObtenido = await obtenerProductoPorId(id);
      setValue(prodObtenido);
    } catch (error) {
      console.log(error);
    }
  };

  const manejarSubmit = async (e) => {
    e.preventDefault();
    try {
      await editarProductoPorId(id, value);
      await Swal.fire({
        icon: "success",
        title: "Éxito",
        text: "Producto Editado Exitosamente",
      });
    } catch (error) {
      console.log(error);
    }
  };

  ////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////

  return (
    <>
      <div className="container">
        <br />
        <h1 className="display-2">Listado de Productos</h1>
        <br />
        <button type="button" className="btn btn-primary" onClick={handleShow}>
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
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            verificarEliminar(id);
                          }}
                        >
                          Eliminar
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Crear Producto</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
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
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              type="submit"
              className="btn btn-primary"
              onClick={(e) => {
                manejarSubmit(e);
              }}
            >
              Guardar
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}
