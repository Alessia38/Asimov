// Routeur Express pour ce module
const express = require('express');
const routeur = express.Router();
const ctrlEleve = require('../controllers/controllerEleve.js');

routeur.get('/', ctrlEleve.lireClient)
routeur.get('/modifier/:id', ctrlEleve.lireUnClient)
routeur.post('/ajouter', ctrlEleve.ajouterClient)
routeur.put('/modifier/:id', ctrlEleve.modifierClient)
routeur.delete('/supprimer/:id', ctrlEleve.supprimerClient)
routeur.get('/rechercher/:id', ctrlEleve.rechercherClient)

module.exports = routeur;