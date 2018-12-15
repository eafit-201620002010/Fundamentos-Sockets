var socket = io();

//on = Escuchar
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

//emit = Enviar info
socket.emit('enviarMensaje', {
    usuario: 'Mateo Ramirez',
    mensaje: 'Hola Mundo'
}, function(res) {
    console.log('respuesta server: ', res);
});

socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});