const Cliente = require("./Cliente")

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
            return this.cliActivo;
        } else {
            return null;
        }
    }

    ingresar(cantidad) {
        this.cliActivo.agregarMovimientos(cantidad)
        return console.log("Su saldo actual es de " + this.cliActivo.saldo);
    }

    disponer(cantidad) {
        if (this.cliActivo.saldo <= cantidad) {
            console.log("Saldo insuficiente");
            return null;
        }
        if (cantidad > 600) {
            this.cliActivo.saldo -= 600
            return console.log("Solo puede disponer de 600€ al día. Su saldo actual es de " + this.cliActivo.saldo);
        } else {
            this.cliActivo.saldo -= cantidad;
            return console.log("Su saldo actual es de " + this.cliActivo.saldo);
        }
    }

    verSaldo() {

    }

    /* autenticar(cli) {
        if(this.cliente.pin == cli.pin && this.cliente.nombre == cli.nombre ){
            console.log("Welcome back!");
            return true;
        }else{
            console.log("Nombre de cliente o pin incorrecto");
            return null;
        }
    }

    ingresar(saldo){
        if(this.autenticar(cli)){
            this.cliente.saldo+=saldo;
        }
    }

    disponer(saldo, cli){
        if(this.autenticar(cli)){
            if(this.cliente.saldo<=saldo){
                console.log("Saldo insuficiente");
                return null;
            }
            if(saldo>600){
                this.cliente.saldo-=600
                return "Solo puede disponer de 600€ al día. Su saldo actual es de "+this.cliente.saldo;
            }else{
                this.cliente.saldo-=saldo;
                return "Su saldo actual es de "+this.cliente.saldo;
            }
        }
    }

    verSaldo(){
        if(this.autenticar(cli)==true){
            return "Actualmente el saldo disponible es de "+this.cliente.saldo+" piedrólares.";
        }
    } */
}

let cajero = new Cajero();
let pablete = new Cliente("pablete", 10)
cajero.arrCli.push(pablete);
cajero.autenticar(pablete.nombre, pablete.pin);
cajero.ingresar(800);
cajero.disponer(500);


module.exports = Cajero;