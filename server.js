// server.js
const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'employees.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

// Export as Vercel serverless function
module.exports = (req, res) => {
    server(req, res);
};