var Persona = /** @class */ (function () {
    function Persona(ropa) {
        this.vestimenta = ropa;
    }
    Persona.prototype.presentacion = function (nombre) {
        console.log("Hola soy ".concat(nombre));
        this.vestimenta.forEach(function (prenda) { return console.log(prenda); });
    };
    return Persona;
}());
var persona1 = new Persona(["jeans", "polo", "zapatillas"]);
persona1.presentacion("Maria");
