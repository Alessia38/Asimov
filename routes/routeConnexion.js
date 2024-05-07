const express = require('express');
const router = express.Router();
const ctrlConnexion = require('../controllers/controllerConnexion');

router.post('/', ctrlConnexion.connexion);

module.exports = router;
