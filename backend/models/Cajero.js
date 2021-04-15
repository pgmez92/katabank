class Cajero {
    constructor() {
        this.arrCli = new Array();
        this.cliActivo = null;
    }

    /* metodos */
    autenticar(nombre, pin) {
        let cliEncontrado = this.arrCli.find(cli => cli.nombre == nombre)
        if (cliEncontrado.pin == pin) {
            this.cliActivo = cliEncontrado;
            return true;
        } else {
            return null;
        }
    }

    ingresar(cantidad) {
        this.cliActivo.agregarMovimientos(cantidad)
        return this.cliActivo.saldo;
    }

    disponer(cantidad) {
        if (this.cliActivo.saldo <= cantidad) {
            return null;
        }
        if (cantidad > 600) {
            this.cliActivo.saldo -= 600
            return this.cliActivo.saldo;
        } else {
            this.cliActivo.saldo -= cantidad;
            return this.cliActivo.saldo;
        }
    }

    verSaldo() {
        return this.cliActivo.saldo;
    }
}


module.exports = Cajero;