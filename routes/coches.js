const express = require('express');
const router = express.Router()

router.get('/', function(req, res) {
    res.send('Primera ruta del coches.js')
})

//exporto el modulo completo

module.exports = router;