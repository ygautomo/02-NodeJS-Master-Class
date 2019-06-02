/*
08 parsingpayloads.js
Module 0108 Parsing payloads

Author: Yugo Gautomo
Date: May 01, 2019
*/


// dependencies
const http = require('http');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;

// The server should response to all requests with a string
const server = http.createServer(function(req, res) {
	// Get the URL and parse it
	let parsedUrl = url.parse(req.url, true);
	
	// Get the path
	let path = parsedUrl.pathname;
	let trimmedPath = path.replace(/^\/+|\/+$/g,'');

	// Get the HTTP methods
	let method = req.method.toUpperCase();

	// Get the query strings as an object
	let queryStringObject = parsedUrl.query;

	// Get the headers as an object
	let headers = req.headers;

	// Get the payloads, if any
	let decoder = new StringDecoder('utf-8');
	let buffer = "";

	req.on('data', function(data){
		buffer += decoder.write(data);
	});

	req.on('end', function(){
		buffer += decoder.end();

		// Send the response
		res.end("Hello World\n");

		// Log the request path
		console.log("Request received on path:", trimmedPath, "with method:" , method, "\
			and with these query string parameters", queryStringObject, "\n");
		console.log("Request received with these headers:", headers, "\n");
		console.log("Request received with this payload:", buffer, "\n");
	});

	console.log("parsedUrl:",parsedUrl);
});

// Start the server, and have it listen on port 3000
server.listen(3000, function() {
	console.log("The server is listening on port 3000 now");
})

// Running command
// cd ./Apps 01 -- RESTful API
// node 08 parsingpayloads.js
// http://45.77.41.41:3000/path
// Postman POST "http://45.77.41.41:3000/path" body ("This is the body we are sending")