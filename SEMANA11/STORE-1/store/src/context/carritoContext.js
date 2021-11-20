import { jsx } from "@emotion/react";
import { useState, useEffect, createContext } from "react";

//recuerden que necesitamos esta referencia para referirnos al contexto, para ser utilizada luego por un usecontext
export const CarritoContext = createContext();

//todo Contexto necesita un Provider, props.children
const CarritoContextProvider = (props) => {
  const [carrito, setCarrito] = useState([]);

  /* producto = {
      id  nombre, precio, cantidad
    } */

  const anadirACarrito = (nuevoProducto) => {
    const existe = carrito.findIndex((prod) => prod.id === nuevoProducto.id);
    //-1 si no existe o si existe la posicion o indice, 1 3 0 6
    if (existe === -1) {
      //es nuevo no existe todavia
      setCarrito([...carrito, nuevoProducto]);
    } else {
      //si existe, tengo que modificarlo segun su posicicion
      let carritoTmp = [...carrito]; //copia del carrito actual
      //solamente modifico la propiedad cantidad del producto existente con la cantidad adicional
      carritoTmp[existe].cantidad =
        carritoTmp[existe].cantidad + nuevoProducto.cantidad;
      setCarrito(carritoTmp);
    }
  };

  const limpiarCarrito = () => {
    setCarrito([]);
  };

  //1. cuando cargue el Provider haremos que pregunte si hay algo en el localstorage
  //1.1 si es que encuentra algo en el localstorage pues hacemos un setCarrito

  useEffect(() => {
    const carritoStorage = JSON.parse(localStorage.getItem("carritoApp"));
    if (carritoStorage.length > 0) {
      setCarrito(carritoStorage);
    }
  }, []);

  //2. Pero cada vez que cambie carrito guardaremos la informacion en el LocalStorage

  useEffect(() => {
    localStorage.setItem("carritoApp", JSON.stringify(carrito));
  }, [carrito]);

  return (
    <CarritoContext.Provider
      value={{ carrito, anadirACarrito, limpiarCarrito }}
    >
      {props.children}
    </CarritoContext.Provider>
  );
};

export default CarritoContextProvider;
