interface iHamburguesa {
  id: number;
  nombre: string;
  ingrediente: Array<string>;
  preparacion: string;
  getingredienteSecreto(): string; //getter
}

class Hamburguesa implements iHamburguesa {
  id;
  nombre;
  ingrediente;
  preparacion;
  private _ingredienteSecreto; //privada
  constructor(id, nombre) {
    this.id = id;
    this.nombre = nombre;
    this.ingrediente = [];
    this.preparacion = "";
    this._ingredienteSecreto = "plancton";
  }
  //getter
  get ingredienteSecreto() {
    return this._ingredienteSecreto;
  }

  //setter
  set ingredienteSecreto(nuevoIngrediente) {
    this._ingredienteSecreto = nuevoIngrediente;
  }
}

let CangreBurguer = new Hamburguesa(1, "Cangreburguer");

CangreBurguer.ingredienteSecreto = "lechuguita";

console.log(CangreBurguer.ingredienteSecreto);
