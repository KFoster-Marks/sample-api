class Controller {
    constructor(factory) {
        this.factory = factory;
    }

    getSample(text) {
        return this.factory.getSample(text);
    }

    addSample(data) {
        console.log(data);
        return data;
    }
}

module.exports = Controller;
