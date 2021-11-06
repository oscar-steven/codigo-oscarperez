import axios from "axios"; //fetch pero mas simple

// conjunto de funciones para hacer peticiones

const URL = `${process.env.REACT_APP_API}productos`;

const obtenerProductos = async () => {
  try {
    const { data } = await axios.get(URL);
    return data;
    // console.table(rpta);
  } catch (error) {
    throw error;
  }
};

const crearProducto = async (nuevoProducto) => {
  try {
    const headers = {
      "Content-Type": "application/json",
    };
    //axios siempre me va a devoler la propiedad data, donde esta la rpta del Servidor
    //axios cuando hace POST,  PUT necesita no solo la URL
    //axios.post(URL, objACrear, {headers})
    const { data } = await axios.post(URL, nuevoProducto, { headers });
    return data;
  } catch (error) {
    throw error;
  }
};

export { obtenerProductos, crearProducto };
