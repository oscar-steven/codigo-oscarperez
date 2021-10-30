// import logo from "./logo.svg";
// import "./App.css";

import { useState } from "react";

function App() {
  //const [estado, funcEstado] = useState(estado_inicial)
  const [contador, setContador] = useState(0);
  const [titulo, setTitulo] = useState("Mi Titulo")

  // let titulo = "Titulo Codigo";

  const actualizarContador = () => {
    setContador(contador + 1);
  };

  return (
    <header>
      <h1>{titulo}</h1>
      <p>{contador}</p>
      <img src="https://picsum.photos/200" alt="imagen" />
      <br />
      <button onClick={actualizarContador}>Aumentar</button>
      <button onClick={() => {setTitulo("Titulo con React")}}>
        Cambiar h1
      </button>
    </header>
  );
}

export default App;
