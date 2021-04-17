const Cliente = require("../models/Cliente");
const Cajero = require("../models/Cajero");


describe("Test de cliente", () => {
    let cajero = new Cajero();

    beforeEach(() => {
        for (i = 0; i <= 100; i++) {
            let n = "cli" + i;
            let s = parseInt(Math.random() * 1000)
            let c = new Cliente(n, s);
            cajero.arrCli.push(c);
        }
    })

    afterEach(() => {
        cajero.arrCli.splice(0);
        cajero.cliActivo = null;
    })

    test("comprobar que el cajero autentica clientes", () => {
        for (i = 0; i <= 100; i++) {
            let cli = cajero.arrCli[i];
            expect(cajero.autenticar(cli.nombre, cli.pin)).toBe(true);
        }
    })

    test("Comprobar que ingresa y suma cantidades aleatorias", () => {
        for (i = 0; i <= 100; i++) {
            let cli = cajero.arrCli[i];
            cajero.autenticar(cli.nombre, cli.pin);
            let s = parseFloat(Math.random() * 1000);
            let saldo_inicial = cajero.cliActivo.saldo;
            cajero.ingresar(s);
            expect(cajero.cliActivo.saldo).toBe(saldo_inicial + s);
        }
    })


    test("Comprobar que dispone y resta del saldo cantidades aleatorias", () => {
        for (i = 0; i <= 100; i++) {
            let cli = cajero.arrCli[i];
            cajero.autenticar(cli.nombre, cli.pin);
            let s = parseInt(Math.random() * 500);
            let saldo_inicial = cajero.cliActivo.saldo;
            cajero.ingresar(s);
            cajero.disponer(s);
            cajero.ingresar(s);
            expect(cajero.cliActivo.saldo).toBe(saldo_inicial + s);
        }
    })

    test("Comprobar que NO puede disponer de MÁS dinero del que tiene en la cuenta", () => {
        for (i = 0; i <= 100; i++) {
            let cli = cajero.arrCli[i];
            cajero.autenticar(cli.nombre, cli.pin);
            let s = 2000;
            expect(cajero.disponer(s)).toBe(null);
        }
    })

    test("Comprobar que NO puede disponer de MÁS de 600€", () => {
        for (i = 0; i <= 100; i++) {
            let cli = cajero.arrCli[i];
            cajero.autenticar(cli.nombre, cli.pin);
            let s = 800;
            let saldo_inicial = cajero.cliActivo.saldo;
            cajero.ingresar(s);
            expect(cajero.disponer(s)).toBe(saldo_inicial+200);
        }
    })

    test("comprobar que solo puede extraer 600€ como máximo al día ",()=>{
        
    })

})