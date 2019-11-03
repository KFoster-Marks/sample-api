const requestHandler = require('../../../utils/handlerUtils/requestHandler.js');
const responseHandler = require('../../../utils/handlerUtils/responseHandler.js');

const version = '1';
const controller = require('./sample.assembler.js').getController();

module.exports = (app) => {
    app.route(`/v${version}/sample/:text`)
        .get(
            requestHandler.createHandler(
                controller,
                'getSample',
                ['text']
            ),
            responseHandler.handleJSONResponse
    );
};
