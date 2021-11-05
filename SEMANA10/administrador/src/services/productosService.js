import axios from "axios"; //fetch pero mas simple

// conjunto de funciones para hacer peticiones

const URL = "https://617b321fd842cf001711bdcf.mockapi.io/api/codigo/productos";

const obtenerProductos = async () => {
  try {
    const rpta = await axios.get(URL);
    console.table(rpta.data);
  } catch (error) {
    throw error;
  }
};
