require('dotenv').config()

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const initializeApplication = () => {
    console.log('Initializing the express application.');

    let app = express();

    app.all('*', (req, res, next) => {
        console.log('All request will pass through this middleware.');
        next();
    });

    // POST request payloads limited to JSON and no larger than 10mb
    app.use(bodyParser.json({ limit: '10mb' }));
    app.use(morgan('dev', {}));

    return app;
}

const startApp = () => {
    const port = process.env.PORT;

    server = app.listen(port, () => {
        console.log(`Express server started on port ${port}`);
    });

    // server.on('error', (err) => {
    //     console.log('There was an error in running the server: ', err);
    // });
    //
    // server.on('close', () => {
    //     console.log('Shutting down the server.');
    // });
}

// const shutdownApp = () => {
//     if (server) {
//         console.log('Shutting down the server.');
//         server.close();
//     }
// }

let server;
let app = initializeApplication();

module.exports = {
    startApp,
    // shutdownApp
};
