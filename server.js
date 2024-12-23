const { createServer } = require('node:http');

const hostname = '127.0.0.1'; //localhost
const port = 6969; 

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n Hi Bro');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
