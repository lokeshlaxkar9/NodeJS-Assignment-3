const http = require("http");
const fs = require("fs");

let content =
  "<h1>Hello World</h1>\n" +
  "<p>This is Lokesh...</p>\n <p>NodeJS create server and readfile Assignment</p>";

try {
  fs.writeFileSync("./index.html", content);
} catch (err) {
  console.error(err);
}

const server = http.createServer((request, response) => {
  response.writeHead(200, {
    "Content-Type": "text/html",
  });
  try {
    const data = fs.readFileSync("./index.html", "utf8");
    response.write(data);
  } catch (err) {
    console.error(err);
  }
  response.end();
});

server.listen(3000, () => {
  console.log("LISTENING AT PORT 3000");
});
