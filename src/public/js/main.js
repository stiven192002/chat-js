$(function() {
    const socket = io();

    //Accedemos a los elementos del Dom//

    const messageForm = $("#message-form");
    const messageBox = $("#message");
    const chat = $("#chat");






    //Eventos//


//enviamos un mensaje al servidor//
messageForm.submit( e => {

    e.preventDefault();
    socket.emit("enviar mensaje" , messageBox.val());
    messageBox.val("");
});


//obtenemos respuesta del servidor//
socket.on("nuevo mensaje", function(datos){
    //console.log(datos);//

    chat.append(`<div class="msg-area mb-2"><p class="msg">${datos.msg}</p></div>`);

});

})





