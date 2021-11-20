import { useState, useEffect } from "react";
import { obtenerProductosPorPagina } from "../services/productoService";

export default function ProductoConFiltrosView() {
  const [producto, setProductos] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [limite, setLimite] = useState(9);
  return <div></div>;
}
