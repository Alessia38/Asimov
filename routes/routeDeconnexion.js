const express = require('express');
const router = express.Router();
const ctrlDeconnexion = require('../controllers/controllerDeconnexion');

// Définissez une route POST pour la déconnexion
router.post('/', ctrlDeconnexion.deconnexion);

module.exports = router;
