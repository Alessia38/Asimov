// Routeur Express pour ce module
const express = require('express');
const routeur = express.Router();
const ctrlEnseignant = require('../controllers/controllerEnseignant.js');

routeur.get('/enseignant', ctrlEnseignant.getEnseignantReferent)
routeur.get('/moyenne', ctrlEnseignant.getMoyenneGenerale)
routeur.get('/projet', ctrlEnseignant.getProjets)
routeur.post('/projet/inscription', ctrlEnseignant.inscriptionProjet)
routeur.get('/stage', ctrlEnseignant.getRecherchesStage)
routeur.get('/stage/convention', ctrlEnseignant.getConventionsStage)
routeur.get('/stage/attestation', ctrlEnseignant.getAttestationsStage)

module.exports = routeur;