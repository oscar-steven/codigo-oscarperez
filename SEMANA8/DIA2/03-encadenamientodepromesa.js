let hornearTorta = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) {
        resolve("torta ready");
      } else {
        reject("se quemo");
      }
    }, 5000);
  });
};

let prepararGlaseado = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Glaseado Listo"); //Va ser exitoso
    //   reject("Se quemo el microondas")
    }, 3000);
  });
};

let cubrirTorta = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    //   resolve("Torta Decorada");
      reject("Pide rappi noma")
    }, 4000);
  });
};

//comencemos por la primera tarea a ejecutar
hornearTorta()
  .then((tortaHorneada) => {
    console.log(tortaHorneada);
    //good, exito, resolve

    //tuvimos exito con la torta, entonces hay que ejecutar, vamos por la sgte.
    //retornamos otra promesa
    return prepararGlaseado();
  })
  .then((glaseadoListo) => {
    console.log(glaseadoListo);
    //este then  es de prepararGlaseado
    return cubrirTorta();
  })
  .then((tortaDecorada) => {
    //este then es de cubrirTorta
    console.log(tortaDecorada);
  }).catch((tortaMala) => {
      // funciona para todas las promesas que esten mal
      console.log(tortaMala)
  });
