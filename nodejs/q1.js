import http from 'http';

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello, Students!\n');
}).listen(3000, () => {
  console.log('Server running on port 3000');
});