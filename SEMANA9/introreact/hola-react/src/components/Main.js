// Reglas del componente
// 1. funcion o clase
// 2. el nombre de la funcion/componente tiene que comenzar en Mayuscula
// 3. esa funcion/componente tiene que retornar algo
// 3.1 el return sera el JSX(HTML) que se dibujara
// 3.2 JSX utiliza(<html></html>)para indicar que dibujara elementos
// 4. tiene que exportarse por defecto, para que otros componentes, lo puedan reutilizar

// Los props se reciben en el hijo con el nombre del "atributo" que se le puso en el componente Padre
// estos props son como los parametros de una funcion
// <Main subtitulo="" tituloPadre={estado} actualizarInfo={setEstado} />


function Main ({subtitulo,tituloPadre,actualizarTitulo, mostrarInfo}) {

    return(
        <main>
            <div>
                <h2>
                    {subtitulo}
                </h2>
                {/* redenrizado condicional, props, estado, variable */}
                {/* si mostrarInfo es true ? muestro si es verdad: muestro esto otro si es false */}
                {mostrarInfo ? (<p>Lorem ipsum dolor sit amet.</p>) : null}
                <p>El titulo de APP es {tituloPadre}</p>
                <button onClick={() => {actualizarTitulo("Titulo desde Main")}}>Actualizar desde Main</button>
            </div>
        </main>
    )

}

export default Main;