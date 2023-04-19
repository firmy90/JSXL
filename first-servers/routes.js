const books = JSON.stringify([
  { id: 1, title: "The Hobbit", author: "J.R.R. Tolkien" },
  {
    id: 2,
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
  },
]);
const author = JSON.stringify([
  { name: "J.R.R. Tolkien" },
  { name: "J.K. Rowling" },
]);

const requestListener = function (req, resp) {
  resp.setHeader("Content-Type", "application/json");
  switch (req.url) {
    case "/":
      fs.readFile(__dirname + "/index.html")
        .then((contents) => {
          resp.setHeader("Content-Type", "text/html");
          resp.writeHead(200);
          resp.end(contents);
        })
        .catch((error) => {
          resp.writeHead(500);
          resp.end(error);
          return;
        });
      break;
    case "/books":
      resp.writeHead(200);
      resp.end(books);
      break;
    case "/authors":
      resp.writeHead(200);
      resp.end(author);
      break;
    default:
      resp.writeHead(404);
      resp.end(JSON.stringify({ error: "Resource not found" }));
      break;
  }
};

module.exports = {requestListener};
