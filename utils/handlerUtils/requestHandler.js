const _ = require('lodash');

class RequestHandler {
    createHandler(controller, methodName, args) {
        const requestHandler = (req, res, next) => {
            try {
                let argsObj = {};
                switch (req.method) {
                    case 'GET':
                    case 'DELETE':
                    case 'POST':
                    case 'PUT':
                        argsObj = Object.assign({}, argsObj, req.body, req.params);
                        break;
                    default:
                        throw new Error(`Unrecognized HTTP Method ${req.method}`);
                }

                if (!controller[methodName]) {
                    throw new Error(`${methodName} not found on controller.`);
                }
                if (!(controller[methodName] instanceof Function)) {
                    throw new Error(`${methodName} on controller ${Object.prototype.toString.call(controller)} is not a function.`);
                }

                // NOTE: In actual app, would want to include some permissions check

                let argsArray = args.map((arg) => {
                    if (arg === 'body') return req.body;
                    if (arg === 'params') return argsObj;
                    return argsObj[arg];
                });

                req.promise = controller[methodName].call(controller, ...argsArray);
            } catch (err) {
                console.log(err);
            } finally {
                next();
            }
        };

        return requestHandler;
    }
}

module.exports = new RequestHandler();
