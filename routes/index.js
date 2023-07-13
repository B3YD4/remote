var express = require('express');
var router = express.Router();
const http = require("http");

/* GET home page. */

router.get('/', (req, res) => {

  const host = 'localhost'; 
  const port = 8000;

  const requestListener = function (req, res) {
    res.writeHead(200);
    
  };
  

  const server = http.createServer(requestListener);
  server.listen(port, host, () => {

      console.log(`Server is running on http://${host}:${port}`);

      const cport = req.connection.remotePort
      const cadress = req.connection.remoteAddress
      let c_port = cport.toString();
      res.render('index', {ip:cadress, port:c_port, host:host});

      req.on('close', () => {
        console.log('bağlantı koptu');
        server.close()
      });

  });

});


module.exports = router;
