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
        setTimeout(() => {
            this.movimientos.set(new Date().getDate(), cantidad);
            this.saldo += cantidad;
        }, 1500);
    }
}




/* let cli = new Cliente("meh");



function mira() {
    
    cli.agregarMovimientos(50)
    cli.agregarMovimientos(50)
    cli.agregarMovimientos(700)



    
         if (cli.movimientos.has(hoy)) {
             let valor = cli.movimientos.forEach(v => {
                 v += v;
             })
             console.log(valor);
         }
}

mira();
let hoy = new Date();

setTimeout(() => {
    let valor=cli.movimientos.forEach(d=>{
        d+=d.get();
    })

    console.log(valor)
}, 1500*4);

 */


module.exports = Cliente;
