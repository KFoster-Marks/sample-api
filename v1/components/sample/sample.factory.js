class Factory {
    constructor(dal) {
        this.dal = dal;
    }

    getSample(text) {
        return this.dal.getSample(text);
    }

    addSample(data) {
        return this.dal.addSample(data);
    }
}

module.exports = Factory;
