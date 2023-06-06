import http, { IncomingMessage, ServerResponse } from "http";

// setInterval(() => console.log("Time: ", Date.now()), 100);

console.log("INIT HTTP", Date.now());

setInterval(() => {
  throw new Error("Uh oh server down...");
  http
    .createServer((request: IncomingMessage, response: ServerResponse) => {
      response.writeHead(200, { "Content-Type": "text/plain" });
      response.end("Hello, World!");
    })
    .listen(4000, () => {
      console.log("RUN HTTP", Date.now());
      console.log("Server is running on port 4000");
    });
}, 5000);
