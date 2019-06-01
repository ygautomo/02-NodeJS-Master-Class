/*
02 webserver.js
Module 02 Starting a Server

Author: Yugo Gautomo
Date: May 01, 2019
*/

// depedencies
const http = require('http');
const url = require('url');

// The server should response to all requests with a string
const server = http.createServer(function(req, res) {
	// Get the URL and parse it
	let parsedUrl = url.parse(req.url,true);
	
	// Get the path
	let path = parsedUrl.pathname;
	let trimmedPath = path.replace(/^\/+|\/+$/g,'');

	// Send the response
	res.end("Hello World\n");

	// Log the request path
	console.log("Request received on path: ", trimmedPath);
});

// Start the server, and have it listen on port 3000
server.listen(3000, function() {
	console.log("The server is listening on port 3000 now");
})

// Running command
// cd ./Apps 01 -- RESTful API
// node 02 webserver.js
// http://45.77.41.41:3000
// curl localhost:3000 on new terminal