const { io } = require('../server');

io.on('connection', (client) => {
    console.log('usuario conectado: ');
    client.emit('enviarMensaje', {
        usuario: 'admin',
        mensaje: 'bienvenido a esta applicacion con sockets'
    });

    //escuchar
    client.on('disconnect', () => {
        console.log('usuario desconectado');
    });

    // Escuchar cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        // if (message.usuario) {
        //     callback({
        //         mensaje: 'Todo salio good'
        //     });
        // } else {
        //     callback({
        //         mensaje: 'todo salio brus'
        //     })
        // }
        client.broadcast.emit('enviarMensaje', data);

    });



});