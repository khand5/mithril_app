var express = require('express')
var server = express()

var mysql = require('mysql')

server.listen(3000, function (request, response) {
  console.log("[Server] Listening on port 3000.")
})
