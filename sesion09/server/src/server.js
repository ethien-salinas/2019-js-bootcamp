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

  // build body data by events
  let body = [];
  req.on('error', (err) => {
    console.error(err);
  })
  .on('data', (chunk) => {
    body.push(chunk);
  })
  .on('end', () => {
    body = Buffer.concat(body).toString();
    console.log(body)
  })

  if(req.method === 'POST' && req.url === '/login'){
    res.end('[POST] /login path');
  }
  res.end('[*]Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

/**
 * let body = [];
  request.on('error', (err) => {
    console.error(err);
  }).on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
 */