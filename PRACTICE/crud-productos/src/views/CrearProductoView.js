import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { crearProducto } from "../services/productosService";
import Swal from "sweetalert2";

let imagen;

export default function CrearProductoView() {
  const [value, setValue] = useState({
    nombre: "",
    descripcion: "",
    precio: 0,
  });

  const navigate = useNavigate();

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
      await crearProducto(value);
      await Swal.fire({
        icon: "success",
        title: "Éxito",
        text: "Producto Creado!",
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const manejarImagen = (e) => {
    e.preventDefault();
    imagen = e.target.files[0];
  };

  return (
    <div>
      <FormProducto
        value={value}
        actualizarInput={actualizarInput}
        manejarSubmit={manejarSubmit}
        manejarImagen={manejarImagen}
      />
    </div>
  );
}
