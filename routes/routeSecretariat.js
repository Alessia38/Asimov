const express = require('express');
const router = express.Router();
const ctrlSecretariat = require('../controllers/controllerSecretariat');

router.get('/moyenne', ctrlSecretariat.moyenne);

module.exports = router;
