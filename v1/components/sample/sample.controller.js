class Controller {
    constructor(factory) {
        this.factory = factory;
        this.getSample = this.getSample.bind(this);
    }

    getSample() {
        return this.factory.getSample();
    }
}

module.exports = Controller;
