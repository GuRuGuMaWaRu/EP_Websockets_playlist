// Make connection
const socket = io.connect("http://localhost:4000");

// Query DOM
const message = document.getElementById("messsage"),
  handle = document.getElementById("handle"),
  btn = document.getElementById("send"),
  output = document.getElementById("output");
