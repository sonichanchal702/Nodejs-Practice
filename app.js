console.log("This is Node js app");

const http = require('http'); // Built-in Node module

// Create server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('🚀 Hello from Chanchal\'s Node Server!');
});

// Listen on port 3000
server.listen(3000, () => {
  console.log('✅ Server is running at http://localhost:3000');
});
