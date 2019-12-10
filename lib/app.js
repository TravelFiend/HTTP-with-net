const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(socket => {
  socket.on('data', data => {
    const request = parseRequest(data.toString());
    socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
  });
});

app.get('/', (req, res) => {

});

app.post('/echo', (req, res) => {

});

app.get('/red', (req, res) => {

});

app.get('/green', (req, res) => {

});

app.get('/blue', (req, res) => {

});

module.exports = app;
