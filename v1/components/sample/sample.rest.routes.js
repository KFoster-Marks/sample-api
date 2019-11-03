// TODO: write & import middleware

const version = '1';
const controller = require('./sample.assembler.js').getController();

module.exports = (app) => {
    app.route(`/v${version}/sample`)
        .get(controller.getSample);
};
