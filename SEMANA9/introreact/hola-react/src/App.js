// import logo from "./logo.svg";
// import "./App.css";

import { useState } from "react";
import Main from "./components/Main";

function App() {
  //const [estado, funcEstado] = useState(estado_inicial)
  const [contador, setContador] = useState(0);
  const [titulo, setTitulo] = useState("Titulo con React");

  // let titulo = "Titulo Codigo";

  const actualizarContador = () => {
    setContador(contador + 1);
  };

  return (
    <>
      <header>
        <h1>{titulo}</h1>
        <p>{contador}</p>
        <img src="https://picsum.photos/200" alt="imagen" />
        <br />
        <button onClick={actualizarContador}>Aumentar</button>
        <button
          onClick={() => {
            setTitulo("Titulo con React");
          }}
        >
          Cambiar h1
        </button>
        <hr />
        {/* para llamar componentes que tengan JSX, los invoco como si fueran etiquetas de HTML con la misma sintaxis */}
      </header>
      {/* Nombre del componente */}
      <Main
        subtitulo="Yo soy el subtitulo"
        mostrarInfo={true}
        numero={1}
        tituloPadre={titulo}
        actualizarTitulo={setTitulo}
      />
      <Main subtitulo="Segundo subtitulo" mostrarInfo={false} numero={2} />
    </>
  );
}

export default App;
