const { json } = require('body-parser');
const express = require('express')
const shell = require('shelljs')
const animalsCrud = require('./crudContainer');
const actionCom = require('./actionCom');
const server = express()
const routes = require('./routes/routes');

server.use(express.json({limit: '20mb'}));
server.use(express.urlencoded({ extended: false, limit: '20mb' }))
server.set('view engine', 'ejs')
server.set("views",__dirname + "/views")

server.listen(4000, function() {
    console.log('http server on 4000 port')
});

server.get('/actionCom', function(req,res) {
    //const index = 1;
    //const index = req.get('input');
    var index = req.body.value;
    console.log(index)
    if(index<2) {
        res.send("haciendo ping al servidor");
    } else {
        res.send('haceindo ping')
        //shell.exec('./pingtoservers.sh')
        //shell.exit(1);
    }
});

server.get('/serverPings1', function(req,res) {
    res.send("haciendo ping al servidor 1");
    routes.get(server, '/', "index")
});

actionCom.get(server, shell);

//actionCom.post(server,animalsCrud);
routes.get(server, '/', "index")



