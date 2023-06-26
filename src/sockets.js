 module.exports = (io) =>{
    io.on("connection" , socket =>{
        console.log("Nuevo Usuario Conectado ");

    //Al recibir un mensaje obtenemos los datos //
    socket.on("enviar mensaje", (datos) =>{
     //console.log(datos);//

     io.sockets.emit("nuevo mensaje",{
        msg:datos
     })
    });

         
    })
 }