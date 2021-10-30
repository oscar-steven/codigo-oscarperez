// Se va encargar de hacer peticiones
// Constante se pone en mayuscula

const URL = "https://617b321fd842cf001711bdcf.mockapi.io/api/codigo/productos";

const obtenerProductos = async () => {
  try {
    //intenta esto
    //await, le decimos aguanta esto se tiene que resolver
    // respues del fetch, me da el status, 200, cabeceras del response, NO ME DA UN JSON
    const respuesta = await fetch(URL); //solamente la URL, es un GET, respuesta de la peticion
    const productos = await respuesta.json(); //aqui hay otra promesa y esto me da el JSON convertido
    return productos; //resolve(productos)
  } catch (error) {
    // y si falla me pasas la voz
    throw error;
  }
};

const crearProducto = async (objProducto) => {
  try {
    //POST
    let configuracion = {
      method: "POST",
      body: JSON.stringify(objProducto), //de obj de JS lo convertimos a JSON que es texto
      headers: { "Content-Type": "application/json" }, //API sepa como interpretarlo
    };
    const respuesta = await fetch(URL, configuracion)
    const productoCreado = await respuesta.json()
    return productoCreado
  } catch (error) {
      throw error
  }
};

//este es el export, si es mas de una funcion se pone coma y se coloca otra funcion
export { obtenerProductos, crearProducto };
