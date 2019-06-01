/*
06 requestmethods.js
Module 0106 Parsing query strings

Author: Yugo Gautomo
Date: May 01, 2019
*/


// dependencies
const http = require('http');
const url = require('url');

// The server should response to all requests with a string
const server = http.createServer(function(req, res) {
	// Get the URL and parse it
	let parsedUrl = url.parse(req.url,true);
	
	// Get the path
	let path = parsedUrl.pathname;
	let trimmedPath = path.replace(/^\/+|\/+$/g,'');

	// Get the HTTP methods
	let method = req.method.toUpperCase();

	// Get the query strings as an object
	let queryStringObject = parsedUrl.query;

	// Send the response
	res.end("Hello World\n");

	// Log the request path
	console.log("Request received on path:", trimmedPath, "with method:" , method, "\
		and with these query string parameters", queryStringObject);
});

// Start the server, and have it listen on port 3000
server.listen(3000, function() {
	console.log("The server is listening on port 3000 now");
})

// Running command
// cd ./Apps 01 -- RESTful API
// node 06 querystrings.js
// http://45.77.41.41:3000/path
// curl localhost:3000/path