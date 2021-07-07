const express = require("express");
const app = express();
const port = 3000;

// Motor de plantilla
app.set("view engine", "ejs");
app.set("views", __dirname + "/views"); //le decimos a ejs donde estan los archivos.(directorio views)

app.use(express.static(__dirname + "/public"));

// Rutas web
app.use('/', require('./router/rutasWeb'));
app.use('/mascotas', require('./router/Mascotas'));

app.use((req, res, next) => {
    res.status(404).render("404", {
        titulo: "404",
        descripcion: "titulo del sitio web"
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});