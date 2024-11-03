const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const modelo = require('./servidor/modelo'); 
const fs = require("fs");

// Serve static files from 'cliente' directory
app.use(express.static(__dirname + '/cliente'));

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

let sistema = new modelo.Sistema(); 

app.get("/", (request, response) => {
   var contenido=fs.readFileSync("../cliente/index.html"); 
response.setHeader("Content-type","text/html");
response.send(contenido);
});

// Add user
app.get('/agregarUsuario/:nick', (req, response) => {
    let nick = req.params.nick;
    res=sistema.agregarUsuario(nick);
    response.send(res);
});

// Get all users
app.get('/obtenerUsuarios', (req, res) => {
    res.send(sistema.obtenerUsuarios());
});

// Delete user
app.get('/eliminarUsuario/:nick', (req, res) => {
    let nick = req.params.nick;
    sistema.eliminarUsuario(nick);
    res.send({ status: 'User deleted', nick: nick });
});

app.get('/usuarioActivo/:nick', (req, res) => {
    let nick = req.params.nick;
    const activo = sistema.usuarioActivo(nick);
    res.send({ nick: nick, activo: activo });
});

// Exponer el método numeroUsuarios
app.get('/numeroUsuarios', (req, res) => {
    const num = sistema.numeroUsuarios();
    res.send({ num: num }); // Retornar el número de usuarios en formato JSON
});
