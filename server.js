'use strict';

const colors = require('colors/safe');
const hirestime = require('hirestime');
const serveStatic = new (require('node-static').Server)('./public');

const port = 8080;

require('http').createServer((request, response) => {
	request.on('end', () => {
		const timer = hirestime();

		response.on('finish', () => {
			let statusCode = response.statusCode;

			if (statusCode < 300)
				statusCode = colors.green(statusCode);
			else if (statusCode < 400)
				statusCode = colors.cyan(statusCode);
			else
				statusCode = colors.red(statusCode);

			console.log([ request.method, request.url, statusCode, timer() ].join(' '));
		});

		serveStatic.serve(request, response);
	}).resume();
}).listen(port, () => console.log('Server listening on port ' + port));
