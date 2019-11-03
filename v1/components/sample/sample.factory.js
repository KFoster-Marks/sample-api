class Factory {
    constructor(dal) {
        this.dal = dal;
    }

    getSample(text) {
        return this.dal.getSample(text);
    }
}

module.exports = Factory;
