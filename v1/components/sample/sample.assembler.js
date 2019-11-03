const Controller = require('./sample.controller.js');
const Dal = require('./sample.dal.js');
const Factory = require('./sample.factory.js');

class Assembler {
    getDal() {
        return new Dal();
    }

    getFactory() {
        const dal = this.getDal();
        return new Factory(dal);
    }

    getController() {
        const factory = this.getFactory();
        return new Controller(factory);
    }
}

module.exports = new Assembler();
