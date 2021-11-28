import axios from "axios";

const URL = `${process.env.REACT_APP_API}Productos`;

const obtenerProductos = async () => {
  try {
    const { data } = await axios.get(URL);
    // console.log(rpta);
    return data; //resolve
  } catch (error) {
    throw error; //reject
  }
};

export { obtenerProductos };
