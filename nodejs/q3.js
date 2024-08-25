
import http from 'http'
http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, World!\n');
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Page Not Found\n');
  }
}).listen(4000, () => {
  console.log('Server running on port 3000');
});