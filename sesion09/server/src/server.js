const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
  'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
};

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.writeHead(200, headers);
  console.log(req)
  // hacer que solo responda /login cuando sea una llamada POST
  if(req.method === 'POST' && req.url === '/login'){
    res.end('[POST] /login path');
  }
  res.end('[*]Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});