 module.exports = (io) =>{

  let nickName =[];


    io.on("connection" , socket =>{
        console.log("Nuevo Usuario Conectado ");

    //Al recibir un mensaje obtenemos los datos //
    socket.on("enviar mensaje", (datos) =>{
     //console.log(datos);//

     io.sockets.emit("nuevo mensaje",{
        msg:datos,
        username:socket.nickName

         })
    });


 socket.on("nuevo usuario", (datos, callback) =>{
    
      if(nickName.indexOf(datos)  != -1){
        callback(true);
      }else{
        callback(true);
        socket.nickName = datos;
        nickName.push(socket.nickName);


        io.sockets.emit("nombre usuario", nickName);
      }

      

      }); 
         
    })
 }