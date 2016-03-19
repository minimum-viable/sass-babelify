var colors = require('colors/safe');
var hirestime = require('hirestime');
var serveStatic = new (require('node-static').Server)('./public');

require('http').createServer(function (request, response) {
	request.on('end', function () {
		var timer = hirestime();

		response.on('finish', function () {
			var statusCode = response.statusCode;

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
}).listen(8080);
