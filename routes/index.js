const express = require('express');

//Creaos una constante con la instancia de router == la funcion Router de la libreria express
//Router nos ayuda a crear rutas y poder usarlas en nuestra web

const router = express.Router();

router.get('/', function(req,res){
    res.send('Primera ruta de index.js')
})
router.get('/segundaRuta', function(req,res){
    res.send('Segunda ruta de index.js')
})

//Exporto el modulo completo

module.exports = router;