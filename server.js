const http = require("http");
const fs = require("fs");
//use AWS's default port, or if it's not available, use port 8081.
const port = process.env.PORT || 8081;

const server = http.createServer(function (req, res) {

    res.statusCode = 200;

    if (req.url == "/" || req.url == "/index.html" || req.url == "/home") {
        let readStream = fs.createReadStream("public/index.html");

        // When the stream is done being read, end the response
        readStream.on('close', () => {
            res.end();
        })

        // Stream chunks to response
        readStream.pipe(res);
    }

    else if (!(req.url.includes(".php")) && (req.url.includes("images/") || req.url.includes("css/") || req.url.includes("js/"))) {
        let readStream = fs.createReadStream("public/" + req.url);

        // When the stream is done being read, end the response
        readStream.on('close', () => {
            res.end();
        })

        // Stream chunks to response
        readStream.pipe(res);
    }

    else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write("<!doctype html><head><title>ZURAFUSE PAGE NOT FOUND</title></head><body><p>The page you are looking for does not seem to exist.</p></body></html>");
        res.end();
    }

}).listen(port);
