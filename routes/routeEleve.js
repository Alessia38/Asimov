// Routeur Express pour ce module
const express = require('express');
const routeur = express.Router();
const ctrlEleve = require('../controllers/controllerEleve.js');

routeur.get('/', ctrlEleve.getEnseignantReferent)
routeur.get('/moyenne', ctrlEleve.getMoyenneGenerale)
routeur.get('/projet', ctrlEleve.getProjets)
routeur.post('/projet/inscription', ctrlEleve.inscriptionProjet)
routeur.get('/stage', ctrlEleve.getRecherchesStage)
routeur.get('/stage/convention', ctrlEleve.getConventionsStage)
routeur.get('/stage/attestation', ctrlEleve.getAttestationsStage)

module.exports = routeur;