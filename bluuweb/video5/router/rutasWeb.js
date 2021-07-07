const express = require("express");
const router = express.Router();

//El 'index' se refiere al archivo index.ejs que tenemos en el directorio views.
//la variable 'titulo' la enviamos al index.ejs.
router.get("/", (req, res) => {
    res.render("index", {
        titulo: "Mi título dinámico recibido"
    });
});

router.get("/servicios", (req, res) => {
    res.render("servicios", {
        tituloServicios: " Este es un mensaje dinámico desde servicios"
    });
});

module.exports = router;