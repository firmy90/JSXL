const http = require("http");
const host = "localhost";
const port = 8000;

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end("Hello, World!");
//   console.log(req);
//   console.log(req.rawHeaders);
//   console.log(req.rawHeaders[0]);
  console.log(req.headers['user-agent']);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

// curl -i -X GET http://localhost:8000
// HTTP/1.1 200 OK
// Date: Wed, 19 Apr 2023 11:50:32 GMT
// Connection: keep-alive
// Keep-Alive: timeout=5
// Transfer-Encoding: chunked

// Hello, World!
