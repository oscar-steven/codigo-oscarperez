// Reglas del componente
// 1. funcion o clase
// 2. el nombre de la funcion/componente tiene que comenzar en Mayuscula
// 3. esa funcion/componente tiene que retornar algo
// 3.1 el return sera el JSX(HTML) que se dibujara
// 3.2 JSX utiliza(<html></html>)para indicar que dibujara elementos
// 4. tiene que exportarse por defecto, para que otros componentes, lo puedan reutilizar

function Main (props) {

console.log("esto son los props", props)

    return(
        <main>
            <div>
                <h2>
                    {props.subtitulo}
                </h2>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>El titulo de APP es {props.tituloPadre}</p>
                <button onClick={() => {props.actualizarTitulo("Titulo desde Main")}}>Actualizar desde Main</button>
            </div>
        </main>
    )

}

export default Main;