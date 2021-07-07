const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.render("mascotas", {
        arrayMascotas: [{
                id: 'kdfas',
                nombre: 'rex',
                description: 'rex description'
            },
            {
                id: 'kdapss',
                nombre: 'chanchan',
                description: 'chanchan description'
            }
        ]
    })
})

module.exports = router;