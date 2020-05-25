const http = require("http");
const server = http.createServer(function(req, res) {})
res.writeHead(200, { "content-type": "text/plain" });
res.write("<h1>I AM LEARNING nodejs</h1>");
res.end();
}).listen(3000, () => console.log("Server Running"));