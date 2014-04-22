var fs = require('fs');
require('http').createServer(function(req, res){
	fs.readFile(String(process.argv[2]), function(err,dat){
		if(err) res.end('Derp!, Something fucked up.');
		
		res.write(dat);
		res.end();
	});
}).listen(8080);
