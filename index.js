const { json } = require('body-parser');
const express = require('express')
const actionCom = require('./actionCom');
const server = express()
const routes = require('./routes/routes');

server.use(express.json({limit: '20mb'}));
server.set("views",__dirname + "/views")
server.set('view engine', 'ejs')

server.listen(3000, function() {
    console.log('http server on 3000 port')
});

server.get('/actionCom', function(req,res) {
    var index = req.body.value;
    console.log(index)
});

//actionCom.post(server,animalsCrud);
routes.get(server, '/', "index")



