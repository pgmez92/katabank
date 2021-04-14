const Cliente = require("../models/Cliente");


describe("Test de cliente", () => {
    let arrCli = [];

    beforeEach(() => {
        for (i = 0; i <= 100; i++) {
            arrCli.push(new Cliente("cli" + 1, i));
        }
    })

    afterEach(() => {
        arrCli.splice(0);
    })

    test("", () => {



    })


})