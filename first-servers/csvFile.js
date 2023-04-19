const http = require("http");
const fs = require("fs").promises;
const host = "localhost";
const port = 8000;

const requestListener = function (req, resp) {
  fs.readFile(__dirname + "/age.csv")
    .then((contents) => {
      resp.setHeader("Content-Type", "text/csv");
      resp.setHeader("Content-Disposition", "attachment; filename=age.csv");
      resp.writeHead(200);
      resp.end(contents);
    })
    .catch((error) => {
      resp.writeHead(500);
      resp.end(error);
      return;
    });
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
