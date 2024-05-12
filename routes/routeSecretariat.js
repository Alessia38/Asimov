const express = require('express');
const router = express.Router();
const ctrlSecretariat = require('../controllers/controllerSecretariat');

// Afficher la liste des moyennes avec un bouton pour modifier chaque moyenne
router.get('/ajouterMoyenne', ctrlSecretariat.ajouter);

// Afficher la liste des moyennes avec un bouton pour modifier chaque moyenne
router.post('/ajoutMoyenne', ctrlSecretariat.ajoutMoyenne);

// Afficher la liste des moyennes avec un bouton pour modifier chaque moyenne
router.get('/moyenne', ctrlSecretariat.moyenne);

// Afficher la page de modification de la moyenne
router.get('/modifierMoyenne/:id', ctrlSecretariat.getModifierMoyenne);

// Mettre à jour la moyenne dans la base de données
router.post('/modifierMoyenne/:id', ctrlSecretariat.postModifierMoyenne);

// Supprimer une moyenne de la base de données
router.get('/supprimerMoyenne/:id', ctrlSecretariat.supprimerMoyenne);

module.exports = router;
