// we need http because we dont have express
const http = require("http");
// we need socketio... its 3rd party !
const socketio = require("socket.io");

// we make an http server with node
const server = http.createServer((req, res) => {
  // Set CORS headers
  res.end("connected");
});

// socket io
const io = socketio(server, {
  cors: {
    origin: "http://localhost:8000",
    credentials: true,
  },
});
io.on("connection", (socket, req) => {
  // send message by emiting
  socket.emit("wellcome", "wellcome to the websocket server");

  socket.on("message", (msg) => {
    console.log(msg);
  });
});

server.listen(8000);
