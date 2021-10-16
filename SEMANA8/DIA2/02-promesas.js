const hornearTorta = () => {
  //no sabemos como ira el horneado de nuestra torta
  //y que eso demora en saber

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //Aqui estoy forzando a que sea true o false
      //comunmente tendriamos una operacion, buscar un registro
      //obtener un elemento, obtener datos
      let estado = false;
      if (estado == true) {
        resolve("La torta esta Ready!");
      } else {
        reject("Pos se quemo :(");
      }
    }, 5000);
  });
};

hornearTorta().then((resultado) => {
  console.log(resultado);
}).catch((tortaquemada)=>{
    console.log(tortaquemada)
});
