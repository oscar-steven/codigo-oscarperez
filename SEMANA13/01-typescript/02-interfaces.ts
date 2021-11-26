interface iGato {
  nombre: string;
  color: string;
  raza: string;
  edad: number;
  personalidad: Array<string>;
  antipatico: boolean;
  tamanio: number;
  peludo: string;
}

//objeto
let gatita: iGato = {
  nombre: "Gatita",
  color: "Cafe con Negro",
  raza: "Siames",
  edad: 6,
  personalidad: ["Amigable", "Seria"],
  antipatico: false,
  tamanio: 5,
  peludo: "bastante",
};

//tsc nombre_archivo.ts => nonbre_archivo.js
//node nombre_archivo.js
