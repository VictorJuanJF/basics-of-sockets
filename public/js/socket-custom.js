var socket = io();
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

//escuchar informacion
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

//enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Victor',
    message: 'Hello world!'
}, function(resp) {
    console.log('Respuesta que llego del servidor: ', resp);
});
//recibir informacion por defecto del servidor
socket.on('enviarMensaje', function(message) {
    console.log('servidor: ', message);
});