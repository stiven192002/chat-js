const express = require("express");
const path = require("path");


const app = express();

const server = require("http").Server(app);
const socketio = require("socket.io")(server);

app.set("port", process.env.PORT || 4000);
//ejecutamos la funcion del archivo soket.js//

require("./sockets")(socketio);

//archivo estatico//
app.use(express.static(path.join(__dirname, "public")));

server.listen(app.get("port"), () => {    
    console.log("funciona por el canal ", app.get("port"));
})