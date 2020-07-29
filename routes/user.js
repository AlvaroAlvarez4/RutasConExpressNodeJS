const express = require('express');
const router = express.Router()

router.get('/', function(req, res) {
    res.send('Primera ruta del user.js')
})

//exporto el modulo completo

module.exports = router;