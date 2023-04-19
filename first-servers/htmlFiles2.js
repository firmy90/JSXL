const http = require("http");
const fs = require("fs").promises;
const host = "localhost";
const port = 8000;
let indexFile;

const requestListener = function (req, resp) {
  resp.setHeader("Content-Type", "text/html");
  resp.writeHead(200);
  resp.end(indexFile);
};

const server = http.createServer(requestListener);

fs.readFile(__dirname + "/index.html")
  .then((contents) => {
    indexFile = contents;
    server.listen(port, host, () => {
      console.log(`Server is running on http://${host}:${port}`);
    });
  })
  .catch((error) => {
    resp.writeHead(500);
    process.exit(1);
  });
