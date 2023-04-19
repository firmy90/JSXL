const http = require("http");
const host = "localhost";
const port = 8000;

const requestListener = function (req, res) {
  res.setHeader("Content-Type", "application/json");
  res.writeHead(200);
  res.end(JSON.stringify({ message: "To jest JSON" }));
  
};

// curl -i --user-agent "Windows10 ahahaha" http://localhost:8000


const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
