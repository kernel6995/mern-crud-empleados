var express = require('express');
var router = express.Router();

// Rutas (paginas)
const employessRoute = require('./employess/index');
router.use('/employess/', employessRoute);

module.exports = router;
