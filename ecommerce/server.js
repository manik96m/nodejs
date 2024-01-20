const http = require("http");
const app = require("./app");

// Port from environment variable
const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port);
