class Factory {
    constructor(dal) {
        this.dal = dal;
    }

    getSample() {
        return this.dal.getSample();
    }
}

module.exports = Factory;
