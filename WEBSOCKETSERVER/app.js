const { WebSocketServer } = require('@txtextcontrol/tx-websocket-server');
const express = require('express');
const app = express();
const server = app.listen(8082);
 
var wsServer = new WebSocketServer(server, 
    {
        serviceAddress: "demos.textcontrol.com", servicePort: 42770
    });