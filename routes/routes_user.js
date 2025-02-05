const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user_controller');

// Rutas
router.get('/prueba-user', UserController.pruebaUser);

// Exportar el router para cargar en el index
module.exports = router;
