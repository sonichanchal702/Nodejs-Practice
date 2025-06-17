console.log("Hello towords the nodeJs!");

const http = require('http'); // Built-in Node module

// Create server
const server = http.createServer((req, res) => {

// Mannual rounting
const url=req.url;
 console.log("node server app! → Requested URL:", req.url);
if(url==='/')
{
  res.writeHead(200,{'Content-Type':'text/plain'});
  res.end("hello, welcome to the home page");
}
else if(url==='/about')
{
res.writeHead(200,{'Content-Type':'text/plain'});
res.end("About us, this is about page");
}
else if (url === '/favicon.ico') {
    res.writeHead(204); // No Content
    res.end();
}
else{
  res.writeHead(404,{'Content-Type':'text/plain'});
res.end("404-Page not found!");
}
});
// Listen on port 3000
server.listen(3000, () => {
  console.log('✅ Server is running at http://localhost:3000');
});

