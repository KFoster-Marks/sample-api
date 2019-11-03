class Controller {
    constructor(factory) {
        this.factory = factory;
    }

    getSample(text) {
        return this.factory.getSample(text);
    }

    addSample(data) {
        return data;
    }
}

module.exports = Controller;
