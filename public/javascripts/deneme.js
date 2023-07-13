const http = require("http");

const host = 'localhost'; 
const port = 8000;

const requestListener = function (req, res) {
    res.writeHead(200);
    const cport = req.connection.remotePort
    const cadress = req.connection.remoteAddress
    let c_port = cport.toString();
    res.write(cadress + ' : ' + c_port);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`); 
}); 