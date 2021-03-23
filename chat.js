const express = require("express");
const app = express();

// socket io import
const socketio = require("socket.io");

// server
const expressServer = app.listen(3000);

const messages = [];
// Socket io Part
const io = socketio(expressServer);

io.on("connection", (socket) => {
  socket.emit("messageFromServer", {
    data: messages,
  });
  socket.on("dataToServer", (dataFromClient) => {
    console.log(dataFromClient);
  });

  socket.on("newMessageToServer", (msg) => {
    io.emit("messageToClients", { text: msg.text });
  });
});
