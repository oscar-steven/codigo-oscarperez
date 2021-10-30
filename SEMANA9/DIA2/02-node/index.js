console.log("Hola mundo desde NODE");

const axios = require("axios"); //import {axios} from 'axios'

axios
  .get("https://reqres.in/api/users?page=2") //GET, devuelve una promesa
  .then((respuesta) => {
    console.log(respuesta.data);
  })
  .catch((error) => {
    console.log(error);
  });
