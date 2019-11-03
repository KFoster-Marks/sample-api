const _ = require('lodash');

class RequestHandler {
    getArgs(func) {
        let results = func.toString().match(/.*?\(([^)]*)\)\s\{/);
        return results ? results[1] : '';
    }

    createHandler(controller, methodName, args) {
        const requestHandler = (req, res, next) => {
            try {
                let argsObj = {};
                switch (req.method) {
                    case 'GET':
                    case 'DELETE':
                    case 'POST':
                    case 'PUT':
                        argsObj = _.assign(argsObj, req.body, req.params);
                        break;
                    default:
                        throw new Error(`Unrecognized HTTP Method ${req.method}`);
                }
                console.log('argsObj: ', argsObj);

                if (!controller[methodName]) {
                    throw new Error(`${methodName} not found on controller.`);
                }
                if (!(controller[methodName] instanceof Function)) {
                    throw new Error(`${methodName} on controller ${Object.prototype.toString.call(controller)} is not a function.`);
                }

                // TODO: Add permissions check

                let controllerMethodArgs = this.getArgs(controller[methodName]);
                if (_.startsWith(controllerMethodArgs, '{')) {
                    // controller method expects one arg, passing argsObj as an object to controller
                    req.promise = controller[methodName].call(controller, argsObj);
                } else {
                    // passing an argument list to controller
                    let argsArray = _.map(args, (arg) => {
                        if (arg === 'body') return req.body;
                        if (arg === 'params') return argsObj;
                        return argsObj[arg];
                    });

                    req.promise = controller[methodName].call(controller, ...argsArray);
                }
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
