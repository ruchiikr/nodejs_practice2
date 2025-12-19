const http = require('node:http')

const server = http.createServer(function (req, res) {
    // console.log(`Incomming request at [${Date.now()}]`);
    // console.log(req.url);

    switch(req.url) {
        case '/':
            return res.end('Homepage');
            break 
            case '/contact-us':
                return res.end('contact me at ruchi5286@gmail.com');
            case '/about':
                return res.end('i am a software eng')
            default:
                res.writeHead(404);
                return res.end("You're lost");
    }

    // res.writeHead(201)
    // res.end(`Hey, you can accept ${req.headers['accept-language']}`);
}) 

server.listen(8000, () => console.log(`Server is running on PORT: 8000`));
