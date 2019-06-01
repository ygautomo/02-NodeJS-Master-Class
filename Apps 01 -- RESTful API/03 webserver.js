/*
03 webserver.js
Module 0103 Starting a Server

Author: Yugo Gautomo
Date: May 01, 2019
*/

Author: Yugo Gautomo
Date: May 01, 2019
*/

// dependencies
const http = require('http');

// The server should response to all requests with a string
const server = http.createServer(function(req, res) {
	res.end("Hello World\n");
});

// Start the server, and have it listen on port 3000
server.listen(3000, function() {
	console.log("The server is listening on port 3000 now");
})

// Running command
// cd ./Apps 01 -- RESTful API
// node 03 webserver.js
// http://45.77.41.41:3000
// curl localhost:3000