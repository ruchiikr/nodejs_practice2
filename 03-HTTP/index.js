const http = require('node:http');
const fs = require('node:fs');

const server = http.createServer(function (req, res) {
    const method = req.method;
    const path = req.url;

    const log = `\n[${new Date().toISOString()}]: ${method} ${path}`;
    fs.appendFileSync('log.txt', log, 'utf-8');

    switch (method) {
        case 'GET': {
            switch (path) {
                case '/':
                    return res.writeHead(200).end('Hello from the server 👋');

                case '/contact-us':
                    return res
                        .writeHead(200)
                        .end('Sure, Email: piyushgarg.dev@gmail.com and Phone: 9999999999');

                case '/tweet':
                    return res
                        .writeHead(200)
                        .end('Tweet-1\nTweet-2');
            }
            break;
        }

        case 'POST': {
            switch (path) {
                case '/tweet':
                    return res
                        .writeHead(201)
                        .end('Tweet saved successfully!');
            }
        }
    }
});

server.listen(8000, () => {
    console.log('HTTP server is running on PORT 8000');
});
