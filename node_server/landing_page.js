var http = require ('http');

var fs = require('fs');

var server = http.createServer(function(request, response){
    console.log('cliet request URL: ', request.url );

    if(request.url === '/'){
        fs.readfile('index.html', 'utf8', function(errors,contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }

   else  if (request.url === '/dojos'){
        fs.readFile('dojos.html', 'utf8', function(errors,contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();

        });



        
    }
    
 else if(request.url === '/ninjas'){
        fs.readFile('ninjas.html', 'utf8', function(errors,contents){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents);
            response.end();

        })
        


    }
    else {
        response.end('File not found!!!');
        
    }
});
server.listen(6789)

console.log("Running in localhost at port 6789");