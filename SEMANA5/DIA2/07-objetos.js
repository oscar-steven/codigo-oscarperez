let mascota = {
    nombre:"backus",
    raza:"Poodle",
    color:"blanco",
    edad:13,
    hobbies:["Jugar","Persguir gatos","Comer pate"],
    comer: function(){
        console.log("ñam ñam ñam");
    },
    ladra: true,
};

// console.log(mascota.nombre)
// console.log(mascota.raza)
// mascota.comer()

let albumMusica = {
    nombre:"After Hours",
    fecha_lanzamiento:"20/03/2020",
    genero:["Dream Pop","Drum and Bass"],
    canciones:[
        {
            titulo:"Heartless",
            duracion:3.21,
            autor:["Abel Tesfaye","Leland Wayne"]
        },
        {
            titulo:"Blinding Lights",
            duracion:3.22,
            autor:["Abel Tesyafe","Ahmad Balshe","Jason Quennevile"]
        }
    ]
};

console.log(albumMusica.canciones[1].autor[2])

