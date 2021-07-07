const http = require("http");

const server = http.createServer((req, res) => {
    res.end('estoy respondiendo tu solicitud v.2');
});
const puerto = 3000;
server.listen(puerto, () => {
    console.log('escuchando solicitudes');
})