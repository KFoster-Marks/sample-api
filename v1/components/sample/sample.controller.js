class Controller {
    constructor(factory) {
        this.factory = factory;
    }

    getSample(text) {
        return this.factory.getSample(text);
    }
}

module.exports = Controller;
