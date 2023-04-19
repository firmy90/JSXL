const http = require("http");
const fs = require("fs").promises;
const host = "localhost";
const port = 8000;

const requestListener = function (req, resp) {
  fs.readFile(__dirname + "/image.gif")
    .then((contents) => {
      resp.setHeader("Content-Type", "image/gif");
      resp.setHeader("Content-Disposition", "attachment; filename=image_my.gif");
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
