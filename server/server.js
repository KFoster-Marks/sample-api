const express = require('./express.js');

const start = async () => {
    await express.startApp();
}

// const shutdown = async () => {
//     await express.shutdownApp();
// }

start();
