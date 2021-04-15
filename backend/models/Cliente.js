class Cliente {

    constructor(nombre, saldo = 0) {
        this.nombre = new String(nombre);
        this.pin = this.generarPin();
        this.saldo = 0;
        this.movimientos = new Map();
        this.agregarMovimientos(saldo);

    }

    //metodos
    generarPin() {
        /* let pin = 1 + Math.random().toFixed(2); */
        let pin = "123";
        return pin;
    }

    agregarMovimientos(cantidad) {
        this.movimientos.set(new Date(), cantidad);
        this.saldo += cantidad;
    }
}
let cli = new Cliente("meh");

cli.agregarMovimientos(50)
console.log(cli.movimientos.keys())
console.log(cli.movimientos.values())


module.exports = Cliente;
