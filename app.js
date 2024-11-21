const { log } = require("console");
const bicicletas = require("./datosBici.js")


const dhBici = {
  listadoBicicletas: bicicletas,
  buscarBici: function (id) {
    const biciEncontrado = this.listadoBicicletas.filter(element => element.id === id);
    return biciEncontrado.length >= 1 ? biciEncontrado[0] : null;
  },
  venderBici: function (id) {
    for (let i = 0; i < this.listadoBicicletas.length; i++) {
      const element = this.listadoBicicletas[i];
      if (element.id === id && !element.vendida) {
        element.vendida = true;
        //console.log("Bicicleta vendida: ", element);
        return element; 

      }
    }
    console.log("Bicicleta no encontrada");
  },
  biciParaLaVenta: function () {
    return this.listadoBicicletas.filter(element => element.vendida === false)
  },
  totalDeVentas: function () {
    return this.listadoBicicletas.length - this.biciParaLaVenta().length;
  }

}

console.log(dhBici.buscarBici(2));


console.log(dhBici.venderBici(1));

console.log(dhBici.biciParaLaVenta());

console.log(dhBici.totalDeVentas());



