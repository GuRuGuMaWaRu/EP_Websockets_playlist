const express = require("express");
const socket = require("socket.io");

// App setup
const app = express();
const server = app.listen(4000, function() {
  console.log("Listening to requests on port 4000");
});

// Static files
app.use(express.static("public"));

// Socket setup
const io = socket(server);

io.on("connection", function(socket) {
  console.log("Made socket connection", socket.id);
});
