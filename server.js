// server.js (or api/index.js)
    const jsonServer = require('json-server');
    const server = jsonServer.create();
    const router = jsonServer.router('employees.json'); // Path to your JSON data
    const middlewares = jsonServer.defaults();

    server.use(middlewares);
    server.use(router);

    module.exports = server; // Export the server for Vercel