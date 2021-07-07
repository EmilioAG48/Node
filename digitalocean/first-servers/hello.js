// Cargamos el módulo http. standar en node.
const http = require("http");

// Definimos el host y el puerto.
// con estas dos vinculaciones podemos conectarnos a nuestro servidor desde un navegador visitando: http://localhost:8000 
const host = 'localhost';
const port = 8000;

// escucha de solictudes.
// req: es la solicitud http que hace el usuario.
// res: respuesta http que devolvemos al usuario.
const requestListener = function (req, res) {
    res.writeHead(200); // respuesta que todo ha ido ok.
    res.end("My first server!"); // mensaje que devuelve el servidor cuando acceden al servidor.
};

// creamos servidor y usamos la escucha de solicitudes.
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});